import React, { Component } from 'react';
import { Image, View, TouchableOpacity, ListView, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Item, Input, Spinner, ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { parseDate } from '../../utils/date'
import styles from '../styles/feed'
import Like from '../../spitch/containers/LikeContainer'

import I18n from '../../i18n';


class SpitchFeed extends Component {

  constructor(props) { 
      super(props);
      this.state={
        pending:false
      }
   }

   actionFeed(item){
      ActionSheet.show(
        {
          options: [I18n.t('spitchFeed_act1'), I18n.t('spitchFeed_act2'), I18n.t('spitchFeed_act3')],
          cancelButtonIndex: 2,
          title: "Action"
        },
        buttonIndex => {
          if(buttonIndex == 0){
             this.setState({pending:true})
             this.props.deleteFeed(item.id)
          }
          if(buttonIndex == 1){
             this.setState({pending:true})
             this.props.reportSpitch(item.content_object.id)
          }
          // 
        }
      )
  }
 
  render() {
    const { item, feed, report } = this.props
    const obj = item.content_object

    return (
        <Card style={styles.card} >
               <CardItem>
                <Left>
                    <TouchableWithoutFeedback onPress={() => Actions.visit({id:obj.user.id})}>
                        <Thumbnail source={{uri:obj.user.photo+".115x115"}} small circular />
                    </TouchableWithoutFeedback>
                    <Body>
                        <View style={{flex:1, flexDirection:'row'}}>
                        	<Text style={{fontSize:15, fontWeight:"700"}} onPress={() => Actions.visit({id:obj.user.id})}>{obj.user.username}</Text> 
                        	<Text style={{fontSize:15}}> {I18n.t('spitchFeed_text1')} </Text>
                        	<Text style={{fontSize:15, fontWeight:"700"}} onPress={() => Actions.visit({id:obj.ask.user.id})}>{obj.ask.user.username}</Text>
                        </View>
                        <Text style={{fontSize:12}} note small>{parseDate(obj.created)}</Text>
                    </Body>
                </Left>
                  <Right style={{flex:0.1}}>
                  {feed.actionPending && this.state.pending && 
                    <Spinner color="#ccc" size="small" style={{width:10, height:10}}/>
                  }

                  {report.pending && this.state.pending && 
                    <Spinner color="#ccc" size="small" style={{width:10, height:10}}/>
                  }

                  {!feed.actionPending && !report.pending &&
                    <Icon name="ios-more" onPress={() => this.actionFeed(item)}/>
                  }
                 </Right>
              </CardItem>
              <CardItem cardBody>
                  <TouchableHighlight onPress={() => Actions.video({item:obj})}>
                      <Image
                        source={{uri:obj.thumb}}
                        style={styles.thumbImage}
                      >
                        <Text style={styles.txtImage}>
                            {obj.ask.text}
                        </Text>
                      </Image>
                  </TouchableHighlight>
              </CardItem>

              <CardItem style={{flex: 1, flexDirection: 'row', paddingLeft:0, paddingRight:0, paddingBottom:15, paddingTop:15}}>

                <Like id={obj.id} likes={obj.likes} is_liked={obj.is_liked} feed={true}/>
  	
  	            <TouchableOpacity style={{flex:3, alignItems: 'center'}} onPress={() => Actions.recorder({id:obj.ask.id, text:obj.ask.text}) }>
  	                <Image source={require('../../../assets/images/btn-spitch.png')} style={{width:140, height:45}}/>
  	            </TouchableOpacity>
  	            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
  	                
  	            </View>
	           </CardItem>

       </Card>
    )
  }
}



export default SpitchFeed
