import React, { Component } from "react";

import { Platform, Text } from 'react-native';
import { DefaultRenderer, Actions } from 'react-native-router-flux';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

import { api }  from './utils/request'

export default class PushController extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    FCM.requestPermissions();

    FCM.getFCMToken().then(fcm => {
        // console.log("TOKEN (getFCMToken)", fcm);
        if(fcm)
          api.patch('/auth/fcm/', {fcm}).catch(error => console.log(error))
    });


    // api.patch('/auth/fcm/', {fcm}

    FCM.getInitialNotification().then(notif => {
        console.log("INITIAL NOTIFICATION", notif)
    });

    this.notificationListner = FCM.on(FCMEvent.Notification, notif => {
      console.log("Notification", notif);
      if(notif.local_notification){
        return;

      } 
      if(notif.opened_from_tray){
        if(notif.type == "1"){
          var user = JSON.parse(notif.user)
          Actions.visit({id:user['id']['N']})
        }
        if(notif.type == "3"){
          var obj = JSON.parse(notif.obj)
          Actions.recorder({id:obj['id']['N'], text:obj['text']['S']})
        }
        if(notif.type == "5" || notif.type == "6" || notif.type == "2"){
          var user = JSON.parse(notif.user)
          var obj = JSON.parse(notif.obj)
          var item = {
            spitch_transcoded: obj['spitch_transcoded']['S'],
            ask: { text: obj['text']['S'] },
            id: obj['spitch']['N'],
            user: {
              username: user['username']['S'],
              photo: user['photo']['S'],
              id: user['id']['N']
            }
          }
          Actions.video({item:item})
        }
        return;
      } 

      if(Platform.OS ==='ios'){
              //optional
              //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link.
              //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
              //notif._notificationType is available for iOS platfrom
              switch(notif._notificationType){
                case NotificationType.Remote:
                  notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                  break;
                case NotificationType.NotificationResponse:
                  notif.finish();
                  break;
                case NotificationType.WillPresent:
                  notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                  break;
              }
            }
      this.showLocalNotification(notif);
    });

    // this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, fcm => {
    //   // console.log("TOKEN (refreshUnsubscribe)", token);
    //   api.patch('/auth/fcm/', {fcm}).catch(error => console.log(error))
    // });
  }

  showLocalNotification(notif) {
    FCM.presentLocalNotification({
      title: notif.title,
      body: notif.body,
      priority: "high",
      click_action: notif.click_action,
      show_in_foreground: true,
      local: true,
      lights: true
    });
  }

  componentWillUnmount() {
    this.notificationListner.remove();
    this.refreshTokenListener.remove();
  }


  render() {

    const children = this.props.navigationState.children;
    const state = children[0];

    return (
      <DefaultRenderer
          navigationState={state}
          key={state.key}
          {...state}
          onNavigate={this.props.onNavigate}
        />
    );
  }
}