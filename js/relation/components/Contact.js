
import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Alert} from 'react-native';
import { Container, Text, Button, Footer, Icon, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { AccessToken, LoginManager } from 'react-native-fbsdk'

import styles from '../styles/contact'
import I18n from '../../i18n';

import { ButtonFacebook } from '../../themes/base'

const FBSDK = require('react-native-fbsdk');
const {
  AppInviteDialog,
} = FBSDK;

//<Text style={{color:'grey', paddingTop:15, paddingBottom:15}}> ou </Text>
//<ButtonFacebook text={I18n.t('contact_btn2')} onPress={() => this.displayAppInvit() }/>


export default class Friend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
        appInviteContent: {
            applinkUrl: 'https://fb.me/1254673944662280',
          }
    };

  }


  displayAppInvit(){
    AppInviteDialog.canShow(this.state.appInviteContent).then(
            function(canShow) {
                if (canShow) {
                    return AppInviteDialog.show({applinkUrl: 'https://fb.me/1254673944662280'});
                }
            }
        ).then(
            function(result) {
                if (result) {
                  console.log('Merci pour votre partage :)' );
                }
            },
            function(error) {
                console.log('Share failed with error: ' + error);
            }
        );
  }


  render() {

    const { user } = this.props;

    return (
      <Container style={styles.container}>
        
        <View style={styles.topcontainer}>
            
          <Image source={require('../../../assets/images/effect.png')} style={styles.bguser}>
            <View style={{alignItems: 'center'}}>
                <Image source={{uri:user.photo}}style={styles.imguser} />
            </View>
          </Image>

          <Text style={styles.text}>
            {I18n.t('contact_text')}
          </Text>
           <Text style={styles.text}>
            {I18n.t('contact_text2')}
          </Text>
          

        </View>

        <View style={styles.botcontainer}>

            <View style={{alignItems: 'center'}}>

              <ButtonFacebook text={I18n.t('contact_btn')} onPress={() => Actions.listFacebook({register:this.props.register})}/>

              
            </View>
          
        </View>

      </Container>
    );
  }
}




