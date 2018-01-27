import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Item, Body, Left, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'
import I18n from '../../i18n';


class Header extends Component {

  constructor(props) { 
    super(props);
    this.followVisit = this.followVisit.bind(this)
    this.unfollowVisit = this.unfollowVisit.bind(this)

    console.log(this.props.me)
    console.log(this.props.current_user.id)
  }


  followVisit(id){
    this.props.followUser(id)
    this.props.changeFollow(true)
  }

  unfollowVisit(id){
    this.props.unfollowUser(id)
    this.props.changeFollow(false)
    this.props.unfollowVisit()
  }

  renderButtonFollow(){
    const { user } = this.props

    return(
      <View>
          {user.profile.data.follow &&
            <View style={styles.btn}>
               <Button primary block small bordered style={styles.btnSize} onPress={() => this.unfollowVisit(user.profile.data.id) }>
                    <Text style={styles.btnWeight}>{I18n.t('profileHeader_follow1')}</Text>
                </Button> 
            </View>
          }

          {!user.profile.data.follow && !this.props.follow &&
            <View style={styles.btn}>
               <Button primary block small style={styles.btnSize} onPress={() => this.followVisit(user.profile.data.id) }>
                    <Text style={styles.btnWeightAbo}>{I18n.t('profileHeader_follow2')}</Text>
                </Button>
            </View>
          }

          {this.props.follow && 
            <View style={styles.btn}>
               <Button primary block small bordered style={styles.btnSize} onPress={() => this.unfollowVisit(user.profile.data.id) }>
                    <Text style={styles.btnWeight}>{I18n.t('profileHeader_follow1')}</Text>
                </Button> 
            </View>
          }
      </View>
    )
   }


  renderDatas(){
    const { user } = this.props
    return(
        <View style={styles.datas}>
            <View style={{flex: 1, alignItems: 'center'}}>

                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.videos : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  {I18n.t('profileHeader_data1')}
                </Text>
          
            </View>
            <TouchableOpacity 
              style={{flex: 1, alignItems: 'center', borderRightWidth: 1, borderLeftWidth:1, borderColor:"#ccc"}} 
              onPress={() => Actions.relation({id:user.profile.data.id, list:'follower'})} >
                
                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.followers : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  {I18n.t('profileHeader_data2')}
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => Actions.relation({id:user.profile.data.id, list:'follow'})}>
                
                <Text style={{fontWeight:"400", color:"blue"}}>
                  {user.datas.data ? user.datas.data.follows : ''}
                </Text>
                <Text style={{fontWeight: '300'}}>
                  {I18n.t('profileHeader_data3')}
                </Text>

            </TouchableOpacity>

      </View>
    )
  }


  render() {
    const { user, me} = this.props


    return (
      <View>
	        <View style={styles.header}>
          
            <Image source={{uri:user.profile.data.photo}} style={styles.headerBackground}>



              <Image source={require('../../../assets/images/fond.png')} style={{flex: 1, height:100, zIndex: 0}} />

              <Thumbnail source={{uri:user.profile.data.photo+".115x115"}} circular style={styles.thumb}/>

                  <Body style={styles.headerBottom}>
                      <Text style={{color:"black", fontSize:16, fontWeight:'500', 'paddingTop': 10}}>{user.profile.data.username}</Text>
                      <Text note>
                        {user.profile.data.title && user.profile.data.title}
                        {!user.profile.data.title && me && I18n.t('profileHeader_text1') }
                      </Text>
                  </Body>

              </Image>

              {user.profile.data.follow === undefined &&
                <TouchableOpacity style={styles.iconContact} onPress={() => Actions.contact()}>
                    <Icon name="ios-person-add-outline"  style={{color:'white'}}/>
                </TouchableOpacity>
              }

              {user.profile.data.follow === undefined &&
                <TouchableOpacity style={styles.iconSetting} onPress={() => Actions.settings()}>
                    <Icon name="ios-settings-outline"  style={{color:'white'}}/>
                </TouchableOpacity>
              }

         </View>

         {this.renderDatas()}

         {user.profile.data.follow === undefined &&
          <View style={styles.btn}>
              <Button dark bordered block small style={styles.btnSize} onPress={() => Actions.userupdate()}>
                  <Text style={styles.btnWeight}>{I18n.t('profileHeader_btn1')}</Text>
              </Button>
          </View>
          }

          {this.props.me === undefined &&  user.profile.data.id == this.props.current_user.id && 
          <View style={styles.btn}>
              <Button dark bordered block small style={styles.btnSize} onPress={() => Actions.userupdate()}>
                  <Text style={styles.btnWeight}>{I18n.t('profileHeader_btn1')}</Text>
              </Button>
          </View>
          }

          {user.profile.data.id != this.props.current_user.id && this.renderButtonFollow()}


          <View style={{flexDirection: 'row',flex:1}}>

            <TouchableOpacity style={styles.btnChoice} onPress={() => this.props.changeChoice(1)}>
              <Text style={this.props.choice == 1 ? styles.btnSelect : styles.btnNoSelect} >
                {I18n.t('profileHeader_tab1')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnChoice} onPress={() => this.props.changeChoice(2)}>
              <Text style={this.props.choice == 2 ? styles.btnSelect : styles.btnNoSelect} >
                {I18n.t('profileHeader_tab2')}
              </Text>
            </TouchableOpacity>

          </View>




	    </View>
    );
  }
}

export default Header