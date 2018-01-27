import React, { Component } from 'react';
import { Field } from 'redux-form'
import { Image, View, TouchableOpacity, Animated, KeyboardAvoidingView, Keyboard} from 'react-native';
import { Container, Text, Button, Footer, InputGroup, Input, Icon, Spinner} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { LoginButton, AccessToken, LoginManager , GraphRequest,
  GraphRequestManager,} from 'react-native-fbsdk'

import { renderInput } from '../../utils/forms/renderers'
import { isRequired } from '../../utils/forms/validators'

import { ButtonGradient, ButtonLoaderGradient } from '../../themes/base'

import styles from '../styles/facebookform'
import I18n from '../../i18n';


class FacebookForm extends Component {

  constructor(props) {
    super(props);
    this._responseInfoCallback = this._responseInfoCallback.bind(this)
    this.state = { 
      form:false,
      keyboard:false,
      first_name:"",
      photo:"https://s3-eu-west-1.amazonaws.com/spitchdev-bucket-uwfmzpv98dvk/media/default/default.jpg"
    };
    this.imguser = new Animated.Value(115);
    this.bg = new Animated.Value(173);
    this.radius = new Animated.Value(57);

  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow);
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }


  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {    
      this.setState({keyboard:true})
  };

  keyboardWillHide = (event) => {
    this.setState({keyboard:false})
  };

  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      console.log('Error fetching data: ' + error.toString());
    } else {

        AccessToken.getCurrentAccessToken().then(
          (data) => {
            this.props.change('token', data.accessToken.toString())
            console.log(data.accessToken.toString())
          }
        )
        this.setState({
          form:true,
          photo:result.picture.data.url,
          first_name:result.first_name
        })
    }
  }

  componentDidMount() {
      const infoRequest = new GraphRequest(
        '/me?fields=first_name,picture.type(normal)',
        null,
        this._responseInfoCallback,
      );

      new GraphRequestManager().addRequest(infoRequest).start();
  }


  render() {

    const { handleSubmit, fields } = this.props;

    if( this.props.submitting )
    {
        btn = (
          <ButtonLoaderGradient />
        )
    } else {
      
       btn = (
        <ButtonGradient onPress={handleSubmit} text={I18n.t('facebookForm_register')} />
      )
    }

    return (
      <Container style={styles.container}>
        {this.state.form && 

          <View style={styles.container}>

            <View style={{alignItems: 'center'}}>

                {!this.state.keyboard && 
                <Image source={require('../../../assets/images/effect.png')} style={styles.bguser}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={{uri:this.state.photo}} style={styles.imguser} />
                    </View>
                </Image> 
                }

              <Text style={styles.textwelcolme}>
                 {I18n.t('facebookForm_hello')} {this.state.first_name}
              </Text>

              <View style={this.state.keyboard ? styles.formopen : styles.form}>
                  <Field
                        name="username"
                        component={renderInput}
                        placeholder={I18n.t('facebookForm_username')}
                        icon="md-mail"
                        validate={isRequired}
                      />
              </View>
                
            </View>

              
              <View style={this.state.keyboard ? {paddingTop:40} : styles.footer}>
                  { btn }
              </View>

          </View> 

          || 
          <Spinner color='blue' />
        }
      </Container>
    );
  }
}


export default FacebookForm