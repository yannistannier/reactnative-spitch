import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, Alert, Platform} from 'react-native';
import { Container, Content, Icon, Item, Spinner} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Camera from 'react-native-camera';
import styles from '../styles/recorder'
import I18n from '../../i18n';



class Recorder extends Component {

  constructor(props) { 
    super(props);
    this.camera = null;
    this.end = false;
    this.state = {
      backgroundColor:"#918c89",
      tintColor:"#5c62e9",
      next:false,
      record:false,
      timer:0,
      progressWidth:100,
      camera: {
        type: Camera.constants.Type.front,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false,
      marker:[],
      display:null,
      device: Platform.select({ios: 'ios', android: 'android'})
    };
  }

  componentDidMount(){
      this.props.initSpitch(this.props.id, this.props.text)
      setTimeout(() => {
        this.setState({display:true}) 
      }, 650)
     this.progressBar()
  } 

  progressBar(){ 
    setInterval(function(){
          if(this.state.record){
            this.refs.circularProgress.performLinearAnimation(this.state.timer, 300);
            this.setState({timer:this.state.timer+1})
            if(this.state.timer == 101){
              this.camera.stopCapture();
              this.end = true;
            }
          }
      }.bind(this), 300);
  }


  onPressIn(){
      if(this.state.timer < 101) {
        if (this.camera) {
          this.camera.capture({mode: Camera.constants.CaptureMode.video }).then((data) => {
             this.props.addClip(data.path)
             if(this.end){
                Actions.replay()
             }
          }).catch(err => console.error(err));
          this.setState({isRecording: true, progressWidth:110});
        }

        this.setState({record:true, next:true})
      }
  }

  onPressOut(){
      if (this.camera) {
        this.camera.stopCapture();
      }
      this.setState({isRecording: false, record:false, progressWidth:100, marker: this.state.marker.concat([this.state.timer*3.6-5]) })
  }


  nextStep(){
      Actions.replay()
  }

  deleteClip(){

    if (this.state.marker.length > 0) {
      Alert.alert(
        I18n.t('recorder_act1'),
        I18n.t('recorder_act2'),
        [
          {text: 'Oui', onPress: () => {
              this.props.removeClip()
              console.log('okkkk')
              this.setState({marker: this.state.marker.slice(0, -1) })
              var timer = 0 
              if (this.state.marker.length > 0)
                timer = ((this.state.marker[this.state.marker.length - 1] + 5) / 3.6) - 1
              this.refs.circularProgress.performLinearAnimation(timer, 600)
              this.setState({timer})
          }},
          {text: I18n.t('recorder_act3')},
        ],
        { cancelable: false }
      )
    }
  }

  takePicture(){
    this.camera.capture({jpegQuality:1})
        .then((data) => this.props.uploadThumbnail(data.path) )
        .catch(err => console.error(err));
  }

  switchFlash() {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }
    console.log(newFlashMode)
    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  switchType() {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });

  }

  back(){
      if(this.props.backtoswipe){
        Actions.swipeask({type:ActionConst.REPLACE})
      }else{
        this.props.back()
      }
  }

  renderButtonPlay(){

      const marker = this.state.marker.map((marker, index) => {
          return(
              <AnimatedCircularProgress
                key={index}
                rotation={marker}
                style={{
                  position:'absolute',
                  backgroundColor: 'rgba(0,0,0,0)'
                }}
                size={100}  
                width={6}
                fill={0.5}
                prefill={0}
                tintColor="white"
                backgroundColor='rgba(0,0,0,0)'  />
          )
      });
      return(
        <View style={styles.blocrecord}>
              <AnimatedCircularProgress
                rotation={0}
                ref='circularProgress'
                style={styles.recorder}
                size={100} 
                width={6}
                fill={0}
                tintColor={this.state.tintColor}
                backgroundColor={this.state.backgroundColor} />

                {marker}
                
                <TouchableOpacity 
                  style={styles.startrecord} 
                  onPressIn = {this.onPressIn.bind(this)}
                  onPressOut = {this.onPressOut.bind(this)} >
                    <Image source={require('../../../assets/images/recorder.png')} style={styles.startrecordsize}/>
                </TouchableOpacity>

          </View>

      )
   }

   renderCamera(){

      return(
        <Camera
          ref={(cam) => {
            this.camera = cam; 
          }} 
          style={styles.preview}
          orientation={Camera.constants.Orientation.portrait}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.temp}
          flashMode={this.state.camera.flashMode}
          type={this.state.camera.type} 
          captureQuality="480p"
          captureAudio={true}
          playSoundOnCapture={false}
        > 

              <Item style={styles.question} onPress={() => this.back()} >
                  <Icon name="ios-arrow-back-outline" style={styles.icon} />
                  <Text style={styles.color}>
                      {this.props.text}
                  </Text>
              </Item>
        
         </Camera>
      )
   }

   

  render() {
    const { spitch } = this.props

    return (
        <View style={styles.container}>
            <StatusBar 
              animated
              hidden 
            />
             
  
              {this.state.display && this.renderCamera()} 
              
              {this.state.display &&
                <View style={styles.controls}>

                    {this.state.next && 
                      !this.state.isRecording &&
                        this.state.marker.length > 0 &&
                          <View style={styles.btndelete}>
                              <TouchableOpacity onPress={this.deleteClip.bind(this)}>
                                  <Icon name="ios-backspace" style={{color:'white', fontSize: 38}}/>
                              </TouchableOpacity>
                          </View>
                    }



                  {this.renderButtonPlay()}
              
                   {this.state.next && 
                      !this.state.isRecording && this.state.marker.length > 0 &&
                        <View style={styles.btnsend}>
                            <TouchableOpacity onPress={this.nextStep.bind(this)}>
                                <Icon name="md-send" style={{color:'#4462e0'}}/>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
              } 

              {this.state.display && !this.state.isRecording && 1==2 &&
               <View style={styles.btncontrol}>
                  
                  {this.state.device == "ios" && 
                    <TouchableOpacity onPress={() => this.switchType() }>
                        <Image source={require('../../../assets/images/switch.png')} style={{marginTop:20}}/>
                    </TouchableOpacity>
                  }

                  {this.state.device == "android" && this.state.marker.length > 0 &&
                    <TouchableOpacity onPress={() => this.switchType() }>
                        <Image source={require('../../../assets/images/switch.png')} style={{marginTop:20}}/>
                    </TouchableOpacity>
                  }


               </View>
               }
              
        </View>
    );
  }
}

export default Recorder
