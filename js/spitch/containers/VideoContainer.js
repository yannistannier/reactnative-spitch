import { connect } from 'react-redux';
import { Alert } from 'react-native'
import Video from '../components/Video';
import { retrieveSpitch, reportSpitch } from '../SpitchActions'

import I18n from '../../i18n';

function mapStateToProps(state, ownProps) {
  return {
  	user : state.user.profile.data,
  	video: state.spitch.video 
  };
}

function mapDispatchToProps(dispatch){
  return {
    retrieveSpitch: (id) => {
      return dispatch(retrieveSpitch(id))
    },
    reportSpitch: (id) => {
      return dispatch(reportSpitch(id))
		.then(function(){
		  	Alert.alert(
			  I18n.t('spitchFeed_report1'),
			  I18n.t('spitchFeed_report2')
			)
		})
		.catch(function(){
			Alert.alert(
			  I18n.t('spitchFeed_report1'),
			  I18n.t('spitchFeed_report2')
			)
		})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Video);
