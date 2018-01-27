import React, { Component } from 'react';
import { Button, Spinner, ActionSheet } from 'native-base';
import { Text, Image, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'

import Header from '../containers/ProfileHeaderContainer'
import I18n from '../../i18n';


class ListSpitchProfile extends Component {

  constructor(props) { 
    super(props);
    this.actionFeed = this.actionFeed.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.state={ 
      refresh:false
    }
  }

  actionFeed(item){
    if(this.props.me){
      ActionSheet.show(
          {
            options: [ I18n.t('listSpitchProfile_act1'), I18n.t('listSpitchProfile_act2')],
            cancelButtonIndex: 1,
          },
          buttonIndex => {
            if(buttonIndex == 0){
                 Alert.alert(
                  I18n.t('listSpitchProfile_act3'),
                  I18n.t('listSpitchProfile_act4'),
                  [
                    {text: I18n.t('listSpitchProfile_act5'), onPress: () => this.props.deleteSpitch(item.id) },
                    {text: I18n.t('listSpitchProfile_act6')}
                  ],
                  { cancelable: false }
                )
            }
          }
      )
    }
  }

  renderItem({item}){

    if(item.loader){
      return ( 
        <View style={{alignItems: 'center', flex:1}}> 
            <Spinner color='white' />
        </View>
      )

    }else{
    return (  
        <TouchableOpacity 
          onPress={() => Actions.video({item:item})}
          onLongPress={() => this.actionFeed(item)} 
          >
            <Image
              key={item.id}
              style={styles.thumbSpitch} 
              source={{uri:item.thumb+".115x115"}} >

                  <Text style={styles.thumbText}>
                     {item.ask.text}
                  </Text>
            </Image>
        </TouchableOpacity>
      )
    }
  }

  onEndReached(){
      this.props.nextListSpitch()
  }

  onRefresh(){
    this.setState({refresh:true})
    this.props.refreshProfile()
    setTimeout(function(){
        this.setState({refresh:false})
    }.bind(this), 500);
  }

  render() {
      
      return (
        <View style={{flex:1}}>
            
            <FlatList
                ListHeaderComponent={() => 
                  <Header user={this.props.user} me={this.props.me} changeChoice={this.props.changeChoice} choice={this.props.choice} changeFollow={this.props.changeFollow} follow={this.props.follow}  />
                }
                data={this.props.user.spitch.list}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                horizontal={false}
                numColumns={2}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.2}
                onRefresh={this.onRefresh}
                refreshing={this.state.refresh}
              />

  
        </View>
      );
    
  }
}

export default ListSpitchProfile
