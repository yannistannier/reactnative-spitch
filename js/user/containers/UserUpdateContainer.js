import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Alert } from 'react-native'
import { Toast } from 'native-base'
import { userNotExists } from '../../auth/AuthActions'
import { updateUser } from '../UserActions'

import UserUpdate from '../components/UserUpdate'
import I18n from '../../i18n';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    initialValues: {
    	title: state.user.profile.data.title,
    	username: state.user.profile.data.username,
    },
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhotoUser: (photo) => {
        return dispatch(updateUser({photo})).then((response) => {
            Toast.show({
                type: 'success',
                text: I18n.t('userUpdate_act1'),
                position: 'bottom',
                duration:2000
              })
          }).catch((error) => {
            console.log('error')
          }) 
    }
  }
}

const config = {
  form: 'editProfileForm',
  enableReinitialize: true,
  onSubmit: (values, dispatch, props) => {

  	   if(props.user.username == values['username'] ){

          return dispatch(updateUser({title:values['title']})).then((response) => {
              Toast.show({
                  type: 'success',
                  text: I18n.t('userUpdate_act1'),
                  position: 'bottom',
                  duration:2000
                })
            }).catch((error) => {
              console.log('error')
            })  

        }else{

          return dispatch(userNotExists({username:values['username']}))
            .then((response) => {
              
                  return dispatch(updateUser(values)).then((response) => {
                    Toast.show({
                      type: 'success',
                      text: I18n.t('userUpdate_act1'),
                      position: 'bottom',
                      duration:2000
                    })
                    
                  }).catch((error) => {
                  console.log('error')
                })  

            }).catch((error) => {
                throw new SubmissionError({ username: I18n.t('userUpdate_act2') })
            }) 

        } 
  	
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(UserUpdate));