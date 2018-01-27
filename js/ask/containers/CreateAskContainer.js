import { connect } from 'react-redux';
import { reduxForm, SubmissionError, reset } from 'redux-form'
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { createAsk } from '../AskActions'
import CreateAsk from '../components/CreateAsk' ;

import I18n from '../../i18n';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    ask: state.ask.create
  };
}

const config = {
  form: 'AskForm',
  onSubmit: (values, dispatch, props) => {
      return dispatch(createAsk(values))
	      .then((response) => {

	          Alert.alert(
  				  I18n.t('createAsk_act1'),
  				  I18n.t('createAsk_act2'),
				  [
				    {text: 'OK', onPress: () => Actions.pop()},
				  ],
				  { cancelable: false }
				)

	      }).catch((error) => {
	          Alert.alert(I18n.t('createAsk_act3'), I18n.t('createAsk_act4'))
	      })
  },
  onSubmitFail : (error, dispatch,submitError) => {
  	console.log(error)
  	console.log(submitError)

  	Alert.alert(I18n.t('createAsk_act5'), I18n.t('createAsk_act6'))

  }
}


export default connect(mapStateToProps, null)(reduxForm(config)(CreateAsk));
