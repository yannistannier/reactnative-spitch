import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';



class IconNotification extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      
    };

  }

  componentDidMount() {
      this.props.countNotification()
  }


  render() {

    const { notification } = this.props

    return (
     <TouchableOpacity  onPress={() => Actions.notification()}>
          <View style={{ backgroundColor:'transparent'}}>
            <Icon name="ios-notifications-outline"  style={{marginRight:10, color:'#9B9B9B'}}/>

            {notification.count > 0 && 
                <View style={{position:'absolute', top:2, right:10, width:9, height:9, borderRadius:5, backgroundColor:'red', zIndex:1000}}></View>
            }

          </View>
      </TouchableOpacity>
    );
  }
}


export default IconNotification
