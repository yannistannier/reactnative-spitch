import React, { Component} from 'react';
import { Field } from 'redux-form'
import { Image, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Container, Text, Body, Item, Input } from 'native-base';
import { ButtonGradient, ButtonLoaderGradient } from '../../themes/base'

import { renderInputAsk } from '../../utils/forms/renderers'
import { isRequired, minLength } from '../../utils/forms/validators'

import styles from '../styles/create'
import I18n from '../../i18n';

class CreateAsk extends Component {

  constructor(props) { 
    super(props);
  }



  render() {

    const { handleSubmit, user, ask } = this.props;

    return (
      <Container style={styles.container}>

          <View style={[styles.body, Platform.select({ios: {height:150}, android: {height:120}, }) ]}>

              <Item style={{borderColor:'transparent', alignItems:'flex-start'}}>
                  <Image source={{uri:user.photo}} style={styles.imguser} />
                   
                    <Field
                      name="text"
                      component={renderInputAsk}
                      placeholder={I18n.t('createAsk_text1')}
                      validate={[isRequired, minLength(3)]}
                    />
              </Item>

          </View>

          <View style={styles.footer}>
                <Text style={styles.footertxt}>
                  {I18n.t('createAsk_text2')}
                </Text>
                <Text style={styles.footertxt}>
                  {I18n.t('createAsk_text3')}
                </Text>

                <View style={styles.btn}>
                  <View style={{alignItems: 'center'}}>
                    { ask.pending && 
                      <ButtonLoaderGradient />
                    ||
                      <ButtonGradient onPress={handleSubmit} text={I18n.t('createAsk_btn')} />
                    }
                  </View>
                </View>
               
          </View>

      </Container>
    );
  }
}

export default CreateAsk
