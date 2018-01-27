import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, ListView, TextInput, StatusBar, Dimensions } from 'react-native';
import { Container, Content, Text, Item, Icon, Input, Right, View, Thumbnail, Spinner, Card, CardItem, Left, Body, Button } from 'native-base';
import { Actions, ActionConst} from 'react-native-router-flux';

import styles from '../styles/swipe'

import { parseDate } from '../../utils/date'
import { FullLoader, ButtonSpitch } from '../../themes/base'

import Video from 'react-native-video';
import Like from '../../spitch/containers/LikeContainer'
import * as Progress from 'react-native-progress';



class SwipeAsk extends Component {


  constructor (props) {
    super(props)
    this.player = null
    this.onEnd = this.onEnd.bind(this)
    this.nextVideo = this.nextVideo.bind(this)
    this.previousVideo = this.previousVideo.bind(this)
    this.back = this.back.bind(this)
    this.onProgress = this.onProgress.bind(this)
    this.state = {
      index:0,
      paused:false,
      progress:0.001
    }
  }

  componentDidMount() {
    this.props.listSpitchAsk(this.props.id)
  }
  
  nextVideo(){
      if(this.state.index < this.props.videos.list.length-1){
         this.setState({index:this.state.index+1, progress:0.001})
      }else{
        this.back()
      }

      if(this.state.index+6 == this.props.videos.list.length){
         this.props.nextListSpitchAsk(this.props.id, this.props.videos.pagination.next_cursor)
      }
      if(this.state.paused == true){
        this.setState({paused:false})
      }
  }

  previousVideo(){
    if(this.state.index > 0){
        this.setState({index:this.state.index-1, progress:0.001})
    }
    if(this.state.index == 0){
        if(this.player){
          this.player.seek(0)
        }
    }
    if(this.state.paused == true){
        this.setState({paused:false})
    }
  }

  onEnd(){
    this.setState({progress:1})
    this.nextVideo()
    if(this.player){
        this.player.seek(0)
      }
  }

  back(){
     this.props.resetVideos() 
     Actions.pop()
  }

  visit(id){
      this.setState({paused:true})
      Actions.visit({id})
  }


  onProgress(data) {
    if(data.playableDuration > data.currentTime){
      var calc = data.currentTime/data.playableDuration
      this.setState({progress:calc ? calc : 0.001})
    }
  }


  render() {
    const { videos } = this.props
 
    return (
      <View style={styles.container}>
          <StatusBar 
              animated
              hidden 
            />
          
              {videos.fulfilled && videos.list.length > 0 && !videos.pending &&
                <View style={{flex:1}}>
                  <Video
                  ref={(ref: Video) => { this.player = ref }}
                  source={{
                    uri:(videos.list[this.state.index].spitch_transcoded === null ? 
                    videos.list[this.state.index].spitch : 
                    videos.list[this.state.index].spitch_transcoded)
                  }}
                  style={styles.fullScreen}
                  onEnd={this.onEnd}
                  playInBackground={false}                // Audio continues to play when app entering background.
                  playWhenInactive={false}
                  ignoreSilentSwitch={"ignore"} 
                  resizeMode="cover"
                  repeat={false}
                  muted={false} 
                  paused={this.state.paused}
                  onProgress={this.onProgress}
                /> 

                

                 <Item style={styles.question}  >
                    <Icon name="ios-arrow-back-outline" style={styles.icon} onPress={() => this.back()} />
                    <Text style={styles.color}>
                        {videos.list[this.state.index].ask.text}
                    </Text>
                  </Item>


                  <Item style={styles.blocuser} onPress={() => this.visit(videos.list[this.state.index].user.id)} >
                      <Thumbnail source={{uri:videos.list[this.state.index].user.photo+".30x30"}} small circular/>
                      <Text style={styles.user}>Par </Text>
                      <Text style={styles.user2}>{videos.list[this.state.index].user.username}</Text>
                      
                        <Right style={styles.user3}>
                          <Like id={videos.list[this.state.index].id} 
                                likes={videos.list[this.state.index].likes} 
                                is_liked={videos.list[this.state.index].is_liked} 
                                color='white' />
                        </Right>
                      
                  </Item>
                  <Progress.Bar 
                    progress={this.state.progress} 
                    borderWidth={0}
                    color="#5c62e9"
                    unfilledColor="rgba(27, 31, 35, 0.60)" 
                    borderRadius={0} 
                    width={Dimensions.get('window').width} 
                    style={{position:'absolute',bottom:0}}/>

              </View> 
            }

             <View style={{flexDirection:"row", flex:1,position: 'absolute',top:50,bottom:55,right:0,left:0}}>

                <TouchableWithoutFeedback onPress={() => this.previousVideo()}><View style={{flex:1}}></View></TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.nextVideo()}><View style={{flex:2}}></View></TouchableWithoutFeedback>
                
            </View>
            

      </View>
    );
  }
}

export default SwipeAsk
