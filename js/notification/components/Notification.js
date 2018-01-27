import React, { Component } from 'react';
import { Image, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'
import { 
  FollowNotification, QuestionNotification, QuestionPrivateNotification, 
  SpitchNotification, SpitchPrivateNotification, LikeSpitchNotification } from './TypeNotification'

import I18n from '../../i18n';


class Notification extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.state = {
      
    };

  }

  onRefresh(){
    this.props.refreshListNotification()
  }

  onEndReached(){
    if(this.props.notification.pagination)
        this.props.nextListNotification(this.props.notification.pagination)
  }

  componentDidMount() {
    this.props.listNotification()
    this.props.resetCountNotification()
  }

  // componentWillReceiveProps(newProps){
  //   if(newProps.notification.fulfilled){
  //     this.setState({
  //       notifs: newProps.notification.lists
  //     })
  //   }
  // }

  renderItem({item}){
        if(item.type == 1)
          return (<FollowNotification followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} item={item}/> )
        if(item.type == 2)
          return (<LikeSpitchNotification item={item}/>)
        if(item.type == 3)
          return (<QuestionNotification item={item}/> )
        if(item.type == 4)
          return (<QuestionPrivateNotification item={item}/> )
        if(item.type == 5)
          return (<SpitchNotification item={item}/> )
        if(item.type == 6)
          return (<SpitchPrivateNotification item={item}/> )

        return (<View></View>)
    }

  renderList(){
     const {user, notification} = this.props

     if(notification.lists.length > 0){

          return(
            <FlatList
                data={notification.lists}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                onRefresh={this.onRefresh}
                refreshing={notification.refresh}
                onEndReachedThreshold={0.5}
                onEndReached={this.onEndReached}
              />
          )

      }else if(notification.error){ 

        return(
            <Text style={styles.txtimg}>Error</Text>
        )

      }else{

          if(notification.pending){
            return(
                <Spinner color='#ccc' style={{paddingTop:200}}/>
            )
          }else{
            return (
                <List>
                    <ListItem itemHeader>
                         <Text>{I18n.t('notification_text1')}</Text>
                    </ListItem>
                </List>
            )
          }
      }
  }

  
  render() {

    return (
      <Container>

          {this.renderList()}

      </Container>
    );
  }
}


export default Notification
