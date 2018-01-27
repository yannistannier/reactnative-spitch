import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form'
import { Actions, ActionConst } from 'react-native-router-flux'
import { Alert } from 'react-native'

import { appAuthToken } from '../../utils/storage' 
import FacebookForm from '../components/FacebookForm'
import { userNotExists, authRegisterFacebook } from '../AuthActions'
import { userAuthenticated } from '../../user/UserActions'

import I18n from '../../i18n';


function mapStateToProps(state, ownProps) {
  return { 
    auth:state.auth
  };
}

const config = {
  form: 'FacebookForm', 
  onSubmit: (values, dispatch, props) => {
    var val = {}
    val["username"] = values['username']
      return dispatch(userNotExists(val))
      .then((response) => {

          return dispatch(authRegisterFacebook(values))
          .then((response) => {

              dispatch(userAuthenticated(response.action.payload.data.user))
              Actions.contact({type: ActionConst.REPLACE, register:true, rightTitle:I18n.t('contact_nxt'), onRight:() => Actions.tabbar() })
              appAuthToken.storeSessionToken(response.action.payload.data.token) 

            }).catch((error) => {
                Alert.alert(I18n.t('facebookForm_act1'), I18n.t('facebookForm_act2'))
            })

      }).catch((error) => {
          throw new SubmissionError({ username: I18n.t('facebookForm_act3') })
      })  
  }
}



export default connect(mapStateToProps, null)(reduxForm(config)(FacebookForm));