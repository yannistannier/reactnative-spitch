import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, Alert, Share} from 'react-native';
import { Container, Content, Icon, Item, Button, Spinner, Right, Switch } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';
import { ShareDialog } from 'react-native-fbsdk'

import { ButtonGradient, ButtonLoaderGradient, ButtonFacebook, ButtonTransparent} from '../../themes/base'
import styles from '../styles/share'



class SpitchShare extends Component {

  constructor(props) { 
    super(props);
    this.onFacebook = this.onFacebook.bind(this)
    this.state = {
    };
  }

  componentDidMount() {
    // Share.share({
    //   message: 'New spitch',
    //   url: this.props.spitch.final,
    //   title: 'Wow, did you see that?'
    // }, {
    //   // Android only:
    //   dialogTitle: 'Share BAM goodness'
    // }).then(function(result) {
    //     if(result.action == "dismissedAction"){
    //         Actions.tabbar({type:ActionConst.REPLACE})
    //     }
    // })

  }

  // onFacebook(){
  //     const shareLinkContent = {
  //       contentType: 'link',
  //       contentURL: "file:///data/user/0/com.spitchtv/cache/VID_20170701_0139482111981445.mp4",
  //       contentDescription: 'Wow, check out this great site!',
  //     }

  
  //       ShareDialog.canShow(shareLinkContent).then(
  //         function(canShow) {
  //           if (canShow) {
  //             return ShareDialog.show(shareLinkContent);
  //           }
  //         }
  //       ).then(
  //         function(result) {
  //           if (result.isCancelled) {
  //             alert('Share cancelled');
  //           } else {
  //             alert('Share success with postId: '
  //               + result.postId);
  //           }
  //         },
  //         function(error) {
  //           alert('Share fail with error: ' + error);
  //         }
  //       );
  // }

  onFacebook() {
      Share.share({
        message: 'New spitch',
        url: this.props.spitch.final,
        title: 'Wow, did you see that?'
      })
  }

  // file:///data/user/0/com.spitchtv/cache/VID_20170701_0139482111981445.mp4

  share(){
    Alert.alert(
        'Partage',
        'Votre spitch a bien été partagé !',
        [
          {text: 'Ok', onPress: () => {Actions.tabbar({type:ActionConst.REPLACE})} }
        ],
        { cancelable: false }
      )
  } 

  render() { 
    const { spitch } = this.props
    return (
        <View style={styles.container}>
            
          <Image 
            style={styles.container}
            source={{uri:"https://spitchdev-bucket-uwfmzpv98dvk.s3.amazonaws.com/media/231/spitch/869/thumb/1554130a78054e40804e.jpg"}}> 

              <View style={styles.content}>

                <View style={styles.ask}>
                    <Text style={styles.asktext}>
                      {spitch.text} gdgd gdg d?
                    </Text>
                </View>

                <View style={styles.subcontent}>

                  <Item style={styles.bloc}>
                      <ButtonTransparent text="Partager" onPress={() => this.onFacebook()}/>
                  </Item>

                </View>

              </View>
            
            </Image>
           
        </View>
    );
  }
}

export default SpitchShare
