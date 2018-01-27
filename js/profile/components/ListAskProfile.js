import React, { Component } from 'react';
import { Button, Spinner, Card, Left, Thumbnail, Body, Right, Icon, CardItem} from 'native-base';
import { Text, Image, View, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/styles'
import { parseDate } from '../../utils/date'
import I18n from '../../i18n';

import Header from '../containers/ProfileHeaderContainer'


class ListSpitchProfile extends Component {

  constructor(props) { 
    super(props);
    this.onRefresh = this.onRefresh.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
    this.state={
      refresh:false
    }
  }

  renderItem({item}){
    var user = this.props.user.profile.data
    var size = 26

    if(item.text.length > 50)
      size = 20
    if(item.text.length > 100)
      size = 19
    if(item.text.length > 130)
      size = 18


    return (  
        <Card style={styles.card} key={item.id}>
              <CardItem>
                <Left>
                    <Thumbnail source={{uri:user.photo+".30x30"}} small circular/>
                    <Body>
                        <Text style={{fontWeight:'500', fontSize:15}}>{user.username}</Text>
                        <Text note small style={{fontWeight:'300', fontSize:12}}>{parseDate(item.created)}</Text>
                    </Body>
                </Left>
              </CardItem>

              
                <CardItem>
                  <Image 
                    source={require('../../../assets/images/home-bg.png')} 
                    style={{flex:1, height:200, alignItems: 'center', justifyContent: 'center', paddingLeft:15, paddingRight:15}}>

                      <TouchableOpacity 
                        onPress={() => {
                            if(item.spitchs > 0) 
                              Actions.swipevideo({id:item.id}) 
                            }
                          } 
                        style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontWeight:'500', fontSize:size, color:'white', backgroundColor:'transparent', textAlign:'center'}}> {item.text} </Text>

                        <Text style={{position:'absolute',bottom:15,color:'white',fontSize:14, backgroundColor:'transparent' }}>
                           {item.spitchs} {I18n.t('listAskProfile_text1')}{item.spitchs > 0 && "s"}   
                      </Text> 
                    </TouchableOpacity>

                  </Image>
                </CardItem>

              <CardItem style={{flex: 1, flexDirection: 'row', paddingLeft:0, paddingRight:0, paddingBottom:15, paddingTop:15}}>

    
                <TouchableOpacity style={{flex:3, alignItems: 'center'}} onPress={() => Actions.recorder({id:item.id, text:item.text}) }>
                    <Image source={require('../../../assets/images/btn-spitch.png')} style={{width:140, height:45}}/>
                </TouchableOpacity>

              </CardItem>


        </Card>
      )
    
  }

  onEndReached(){
      this.props.nextListAsk()
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
                  <Header user={this.props.user} me={this.props.me} changeChoice={this.props.changeChoice} choice={this.props.choice} changeFollow={this.props.changeFollow} follow={this.props.follow}/>
                }
                data={this.props.user.ask.list}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.2}
                onRefresh={this.onRefresh}
                refreshing={false}
              />

  
        </View>
      );
    
  }
}

export default ListSpitchProfile
