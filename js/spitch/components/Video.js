import React, { Component, } from 'react';
import { Image, TouchableWithoutFeedback, ListView, TextInput, StatusBar, TouchableHighlight, Platformn, Dimensions, Alert } from 'react-native';
import { Text, View, Icon, Item, Thumbnail, Spinner, Right, ActionSheet} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';

import { FullLoader } from '../../themes/base'
import styles from '../styles/video'
import Like from '../../spitch/containers/LikeContainer'
import * as Progress from 'react-native-progress';

import I18n from '../../i18n';

class VideoSpitch extends Component {

  constructor(props) { 
    super(props);
    this.actionFeed = this.actionFeed.bind(this)
    this.onLoad = this.onLoad.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.visit = this.visit.bind(this)
    this.player=null
    this.state={
      paused:false,
      loader:true,
      progress:0.001
    }
  }

  componentWillMount() {
    this.props.retrieveSpitch(this.props.item.id)
  }

  onLoad() {
    this.setState({loader:false});
  };

  onPressIn(){
    this.setState({paused:true})
  }

  onPressOut(){
    this.setState({paused:false})
  }

  onProgress(data) {
    if(data.playableDuration >= data.currentTime){
      var calcul = data.currentTime/data.playableDuration
      this.setState({progress:calcul ? calcul : 0.001})
    }
  }

  onEnd(){
    this.setState({progress:1})
    Actions.pop()
  }

  visit(id){
    this.setState({paused:true})
    Actions.visit({id})
  }

  actionFeed(item){
    

        // ActionSheet.show(
        //   {
        //     options: [ "Supprimer la video", "Annuler"],
        //     cancelButtonIndex: 1,
        //   },
        //   buttonIndex => {
        //     if(buttonIndex === 0){
        //          Alert.alert(
        //           'Suppression',
        //           'Etes-vous sur de vouloir supprimer cette video ?',
        //           [
        //             {text: 'Oui', onPress: () => console.log('ok')},
        //             {text: 'Annuler'}
        //           ],
        //           { cancelable: false }
        //         )
        //     }
        //   }
        // )

      ActionSheet.show(
        {
          options: [ I18n.t('spitchFeed_act2'), I18n.t('spitchFeed_act3')],
          cancelButtonIndex: 1,
        },
        buttonIndex => {
          if(buttonIndex === 0){
             this.props.reportSpitch(item.id)
          }
        }
      )
    

  }


  render() {
    const { video, item } = this.props

    return (
     <View style={styles.container}>
          <StatusBar 
              animated
              hidden 
            /> 

              <TouchableWithoutFeedback onPressIn = {this.onPressIn.bind(this)} onPressOut = {this.onPressOut.bind(this)} >
                <View style={{flex:1}}>
                <Video
                  ref={(ref: Video) => { this.player = ref }}
                  source={{uri:(item.spitch_transcoded === null ? item.spitch : item.spitch_transcoded)}}
                  style={styles.fullScreen}
                  playInBackground={false}                // Audio continues to play when app entering background.
                  playWhenInactive={false}
                  ignoreSilentSwitch={"ignore"} 
                  resizeMode="cover"
                  repeat={false}
                  muted={false} 
                  paused={this.state.paused}
                  onLoad={this.onLoad}
                  onProgress={this.onProgress}
                  onEnd={this.onEnd}
                /> 
                

                   <Item style={styles.question}  >
                      <Icon name="ios-arrow-back-outline" style={styles.icon} onPress={() => Actions.pop()} />
                      <Text style={styles.color} onPress={() => Actions.pop()} >
                          {item.ask.text}
                      </Text>
                    </Item>


                    <Item style={styles.blocuser} onPress={() => this.visit(item.user.id)} >
                        <Thumbnail source={{uri:item.user.photo+".30x30"}} small circular/>
                        <Text style={styles.user}>{I18n.t('swipeAsk_text1')} </Text>
                        <Text style={styles.user2}>{item.user.username}</Text>
                         
                        <Right>
                            <Item style={{borderBottomWidth:0,}}>
                              <Right style={{marginRight:20}}>
                              {video.fulfilled && 
                                <Like id={video.data.id} likes={video.data.likes} is_liked={video.data.is_liked} color='white' />
                              }
                              </Right>
                              {this.props.user.id != this.props.item.user.id && 
                                <Icon onPress={() => this.actionFeed(item)} name="ios-more" style={{ marginRight:10, color:'white'}}/>
                              }
                            </Item>
                        </Right>

                           

                    </Item>


                 </View> 
              </TouchableWithoutFeedback>

              <Progress.Bar 
                  progress={this.state.progress} 
                  borderWidth={0}
                  color="#5c62e9"
                  unfilledColor="rgba(27, 31, 35, 0.60)" 
                  borderRadius={0} 
                  width={Dimensions.get('window').width} 
                  style={{position:'absolute',bottom:0}}/>
              

            
            {this.state.loader && 
              <FullLoader />
            }
     </View>
    );
  }
}

export default VideoSpitch
