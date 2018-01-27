import { connect } from 'react-redux';
import SpitchFeed from '../components/SpitchFeed' ;
import { Alert } from 'react-native'

import {deleteFeed} from '../FeedActions'
import {reportSpitch} from '../../spitch/SpitchActions'

import I18n from '../../i18n';


function mapStateToProps(state, ownProps) {
  return { 
  	feed: state.feed,
  	report: state.spitch.report
  };
}
 
function mapDispatchToProps(dispatch){
  return {
    deleteFeed: (id) => {
      return dispatch(deleteFeed(id))
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


export default connect(mapStateToProps, mapDispatchToProps)(SpitchFeed);
