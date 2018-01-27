import React, { Component } from 'react';
import { Field } from 'redux-form'
import { View, Image, KeyboardAvoidingView, Animated, TouchableOpacity} from 'react-native';
import { Container, Content, Thumbnail, Footer, Body, Text, Spinner } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker'

import { renderInput } from '../../utils/forms/renderers'
import { isRequired } from '../../utils/forms/validators'

import { ButtonGradient, ButtonLoaderGradient } from '../../themes/base'

import styles from '../styles/update'
import I18n from '../../i18n';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      'image': false
    };

  }

  picker(){
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality:1,
      includeBase64:true,
      mediaType:'photo',
      showCropGuidelines:false
    }).then(image => {
        this.setState({
          // image: {uri: image.path, width: 200, height: 200}
          image: true
        });
        this.props.updatePhotoUser(image.data).then((response) => {
            this.setState({image: false});
        });

    }).catch(e => console.log(e));;

  }

  render() {
    const { user, handleSubmit} = this.props

    return (
      <Container style={styles.container}>
        
        <KeyboardAvoidingView style={styles.topcontainer}>
          <Content >
            <View style={{alignItems: 'center'}}>

                <TouchableOpacity onPress={() => this.picker()} style={{alignItems: 'center'}}>
                  { this.state.image &&
                    <Spinner small/>
                    ||
                    <Thumbnail source={{uri:user.photo}} circular style={{width:100, height:100, borderRadius:50}} />
                  }

                  <Text style={styles.txtPhoto}>
                    {I18n.t('userUpdate_text1')}
                  </Text>
                </TouchableOpacity>

                
            </View>


              <View style={{alignItems: 'center'}}>
                  <View style={[styles.form]}>

                        <Field
                          name="username"
                          component={renderInput}
                          placeholder={I18n.t('userUpdate_text2')}
                          icon="md-person"
                          validate={isRequired}
                          nofloating={true}
                        />

                        {this.props.dirty}

                        <Field
                          name="title"
                          multiline
                          component={renderInput}
                          placeholder={I18n.t('userUpdate_text3')}
                          icon="md-person"
                          nofloating={true}
                        />

                  </View>
              </View>
          </Content>
        </KeyboardAvoidingView>

          <Footer style={styles.footer}>
            <Body style={styles.bodyfooter}>
              { this.props.submitting &&
                <ButtonLoaderGradient />
                ||
                this.props.dirty &&
                    <ButtonGradient onPress={handleSubmit} text={I18n.t('userUpdate_btn1')} />
              }
            </Body>
          </Footer>
           
      </Container>
    );
  }
}

export default EditProfile
