import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, Alert } from 'react-native';
import { Container, Content, Icon, Item, Button, Spinner } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';

import styles from '../styles/replay'
import { ButtonGradient, ButtonLoaderGradient, FullLoader } from '../../themes/base'
import { appAuthToken } from '../../utils/storage'
import { API_ROOT_URL }  from '../../utils/request'

import RNVideoEditor from 'react-native-video-editor';
import RNFetchBlob from 'react-native-fetch-blob'
import I18n from '../../i18n';


class Replay extends Component {

  constructor(props) { 
    super(props);
    this.player = null;
    this.updateProgress = this.updateProgress.bind(this)
    this.upload = this.upload.bind(this)
    this.state = {
      video:null,
      paused:false,
      title:'Upload',
      progress:0
    };

  } 

  componentDidMount(){
    this.props.resetMergeClip()
    
    RNVideoEditor.merge(
      this.props.spitch.clips,
      (results) => {
        console.log('Error: ' + results);
      },
      (results, file) => {
        console.log(file)
        this.props.mergeClip(file)
      }
    );

  }

  updateProgress(progress){
      this.setState({progress:Math.round(progress)})
  }

  upload(){
      this.setState({paused:true})
      var video = this.props.spitch.video
      var id = this.props.spitch.id

      this.props.uploadPending()
      uploadFulfilled = this.props.uploadFulfilled
      updateProgress = this.updateProgress

      appAuthToken.getSessionToken()
        .then((token) => {
            
           name = Date.now().toString() 
           RNFetchBlob.fetch('POST', API_ROOT_URL+'ask/'+id+'/spitch/', {
                Authorization : "Token "+token,
                'Content-Disposition': 'attachment; filename='+name+'.mp4',
                timeout:0
            }, RNFetchBlob.wrap(video))
           .uploadProgress({ interval : 200 },(written, total) => {
                  updateProgress((written / total)*100)
            })
            .then((res) => {

              let link = null
              let thumb = res.json().thumb 

              uploadFulfilled(link, thumb)
              // Actions.share()
              Alert.alert(
                I18n.t('replay_act1'),
                I18n.t('replay_act2'),
                [
                  {text: 'Ok', onPress: () => {Actions.tabbar({type:ActionConst.RESET})} }
                ],
                { cancelable: false }
              )

            })
            .catch((err) => {
              console.log(err)
              dispatch({type:'UPLOAD_SPITCH_REJECTED', error:err })
            })
         })

  }


  render() { 
    const { spitch } = this.props

    return (
        <View style={styles.container}>
            
            {spitch.video &&
                <Video
                  ref={(ref: Video) => { this.player = ref }}
                  source={{uri:spitch.video}}
                  style={styles.fullScreen}
                  playInBackground={false}
                  playWhenInactive={false} 
                  resizeMode="cover"
                  repeat={true}
                  paused={this.state.paused}
                /> 
                
            }

            
            <Item style={styles.question} onPress={() => Actions.pop()} >
                <Icon name="ios-arrow-back-outline" style={styles.icon} />
                <Text style={styles.color}>
                    {spitch.text}
                </Text>
            </Item>

            {spitch.video &&
              <Item style={styles.next}> 
                  <ButtonGradient text={I18n.t('replay_btn')} onPress={ () => this.upload()}/>
              </Item>
              ||
                <View style={styles.next}>
                  <Spinner color="white" />
                </View>
            }

            {spitch.pending && 
              <View style={styles.loader}>
                <View style={styles.blocloader}>
                  <Spinner color='white'/>
                  <View>
                    <Text style={{fontSize:14, color:'white' }}>
                        {this.state.progress} %
                    </Text>
                  </View>
                </View>
              </View>
            }
           
        </View>
    );
  }
}

export default Replay
