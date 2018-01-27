import React, { Component, Dimensions, } from 'react';
import { Image, View, TouchableOpacity, Animated, Share, FlatList, RefreshControl, StatusBar } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body, Item, Input, Spinner, ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { ButtonTransparent, CenterLoader} from '../../themes/base'
import styles from '../styles/feed'
import SpitchFeed from '../containers/SpitchFeedContainer'
import Rating from './Rating'

import I18n from '../../i18n';

class ListFeed extends Component {

  constructor(props) {
    super(props);
    // this.actionFeed = this.actionFeed.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
  }

  componentDidMount() {
      this.props.listFeed()
  }


  renderItem({item}){
    if(item.feed_type == 1){
      return (<SpitchFeed actionFeed={this.actionFeed} item={item} /> )
    }
    return (<View></View>)
  }

  renderFooter(){
    if(this.props.feed.pagination)
       return (<Spinner color='black' />)
    return (<View></View>)
  }

  onEndReached(){
    if(this.props.feed.pagination)
        this.props.nextFeed(this.props.feed.pagination.next_cursor)
  }

  onRefresh(){
     this.props.refreshFeed()
  }
  
  render() {
    const { user, feed } = this.props
    return (
      <Container style={styles.container}>

          

          <Item style={styles.ask} onPress={ () => Actions.ask() }>
              <Image source={{uri:user.photo}} style={styles.imguser} />
              <Text style={{color:'#9B9B9B'}}>
                  {I18n.t('listFeed_question')}
              </Text>
          </Item>


          {feed.fulfilled && feed.list.length > 0 && 
            <FlatList
                data={feed.list}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                onEndReachedThreshold={0.5}
                onEndReached={this.onEndReached}
                onRefresh={this.onRefresh}
                refreshing={feed.refreshPending}
                ListFooterComponent={this.renderFooter}
              />
          }

          {feed.pending &&
            <CenterLoader />
          }

          
      </Container>
    );
  }
}

export default ListFeed
