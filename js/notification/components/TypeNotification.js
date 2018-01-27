import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { parseDate } from '../../utils/date'
import styles from '../styles/styles'

import I18n from '../../i18n';


export class FollowNotification extends Component {
  
  constructor(props) {
      super(props);
    
      this.state = {
        item: this.props.item
      };
   }

  unfollowFriend(id){
    var item = this.state.item
    item.follow = false
    this.setState({item})
    this.props.unfollowUser(id)
  }

  followFriend(id){
    var item = this.state.item
    item.follow = true
    this.setState({item})
    this.props.followUser(id)
  }

  render() {
    var item  = this.state.item
    return (
      
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}  >
            <TouchableOpacity onPress={() => Actions.visit({id:item.user.id})} >
                <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            </TouchableOpacity>
            <Body>
            	   <TouchableOpacity onPress={() => Actions.visit({id:item.user.id})} >
	                <Text style={styles.txt}> 
	                    <Text style={styles.name}>{item.user.username} </Text>
	                    {I18n.t('notification_text2')}
	                </Text>
	                <Text small note>{parseDate(item.timestamp*1000)}</Text>
                </TouchableOpacity>
            </Body>

            <Right>
                {item.follow &&
                  <Button small bordered onPress={() => this.unfollowFriend(item.user.id) }>
                      <Icon name='checkmark' style={{color:'blue'}}/>
                  </Button>
                  ||
                  <Button small primary onPress={() => this.followFriend(item.user.id) }>
                      <Icon name='ios-person-add' style={{color:'white'}} />
                  </Button>
                }
              </Right>
        </ListItem>
         
    )
  }
}

export class LikeSpitchNotification extends Component {

  render() {
    const { item } = this.props
    var formated = {
        spitch_transcoded: item.obj.spitch_transcoded,
        ask: { text: item.obj.text },
        id: item.obj.spitch,
        user: {
          username: item.user.username,
          photo: item.user.photo,
          id: item.user.id
        }
      }
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <TouchableOpacity onPress={() => Actions.video({item:formated}) }>
              <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            </TouchableOpacity>
            <Body>
                <TouchableOpacity onPress={() => Actions.video({item:formated}) }>
                    <Text style={styles.txt}> 
                        <Text style={styles.name}>{item.user.username} </Text>
                        {I18n.t('notification_text7')} 
                        "<Text style={styles.question}>{item.obj.text}</Text>"
                    </Text>
                    <Text small note>{parseDate(item.timestamp*1000)}</Text>
                </TouchableOpacity>
            </Body>
        </ListItem>
    )
  }
}



export class QuestionNotification extends Component {

  render() {
    const { item } = this.props
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}} >
            <TouchableOpacity onPress={() => Actions.recorder({id:item.obj.id, text:item.obj.text}) }>
                <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            </TouchableOpacity>
            <Body>
                <TouchableOpacity onPress={() => Actions.recorder({id:item.obj.id, text:item.obj.text}) }>
                    <Text style={styles.txt}> 
                        <Text style={styles.name}>{item.user.username} </Text>
                        {I18n.t('notification_text3')}
                        "<Text style={styles.question}>{item.obj.text}</Text>"
                    </Text>
                    <Text small note>{parseDate(item.timestamp*1000)}</Text>
                </TouchableOpacity>
            </Body>
            
        </ListItem>
    )
  }
}

export class QuestionPrivateNotification extends Component {

  render() {
    const { item } = this.props
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            <Body>
                <Text style={styles.txt}> 
                    <Text style={styles.name}>{item.user.username} </Text>
                    {I18n.t('notification_text4')} 
                    "<Text style={styles.question}>{item.obj.text}</Text>"
                </Text>
                <Text small note>{parseDate(item.timestamp*1000)}</Text>
            </Body>
        </ListItem>
    )
  }
}


export class SpitchNotification extends Component {

  render() {
    const { item } = this.props

    var formated = {
        spitch_transcoded: item.obj.spitch_transcoded,
        ask: { text: item.obj.text },
        id: item.obj.spitch,
        user: {
          username: item.user.username,
          photo: item.user.photo,
          id: item.user.id
        }
      }
          
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <TouchableOpacity onPress={() => Actions.video({item:formated}) }>
                <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            </TouchableOpacity>
            <Body>
                <TouchableOpacity onPress={() => Actions.video({item:formated}) }>
                    <Text style={styles.txt}> 
                        <Text style={styles.name}>{item.user.username} </Text>
                        {I18n.t('notification_text5')} 
                        "<Text style={styles.question}>{item.obj.text}</Text>"
                    </Text>
                    <Text small note>{parseDate(item.timestamp*1000)}</Text>
                </TouchableOpacity>
            </Body>
        </ListItem>
    )
  }
}


export class SpitchPrivateNotification extends Component {

  render() {
    const { item } = this.props
    return (
        <ListItem itemHeader style={{paddingBottom:15, paddingTop:15}}>
            <Thumbnail style={styles.imguser} source={{uri:item.user.photo}} />
            <Body>
                <Text style={styles.txt}> 
                    <Text style={styles.name}>{item.user.username} </Text>
                   {I18n.t('notification_text6')} 
                    "<Text style={styles.question}>{item.obj.text}</Text>"
                </Text>
                <Text small note>{parseDate(item.timestamp*1000)}</Text>
            </Body>
        </ListItem>
    )
  }
}