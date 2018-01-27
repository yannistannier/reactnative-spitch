import React, { Component } from 'react';
import { Text, Icon, Button, Spinner, View } from 'native-base';
import { AccessToken, LoginManager } from 'react-native-fbsdk'

import styles from '../../themes/styles'


class Facebook extends Component {

  constructor(props) { 
    super(props);

    this.state={
    }
    this._responseInfoCallback = this._responseInfoCallback.bind(this)
  }



  _responseInfoCallback(error: ?Object, result: ?Object) {
    console.log('callback')
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {
        this.props.authFacebook(result)
    }
  }

  facebook(){
      
      LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {

              AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.props.verifAuthFacebook(data.accessToken.toString())
                  }
                )
          }
        }.bind(this),
        function(error) {
          alert('Login fail with error: ' + error);
        }
      );
  }

  render() {
    const { color, auth } = this.props
    if(auth.pending){
      return(
        <Button style={color == 'white' ? styles.buttonFacebookWhite : styles.buttonFacebook} iconLeft onPress={() => this.facebook()}>
           <View style={{alignItems: 'center', flex:1}}>
              <Spinner small color='white'/>
           </View>
        </Button>
      )
    }else {
      return (
        <Button style={color == 'white' ? styles.buttonFacebookWhite : styles.buttonFacebook} iconLeft onPress={() => this.facebook()}>
           <Icon name='logo-facebook' />
           <Text style={styles.textFacebook}>Facebook</Text>
        </Button>
      );
    }
  }
}

export default Facebook
