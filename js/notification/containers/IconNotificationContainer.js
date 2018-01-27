import { connect } from 'react-redux';
import IconNotification from '../components/IconNotification';

import { countNotification } from '../NotificationActions'


function mapStateToProps(state, ownProps) {
  return { 
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch){
  return {
  	countNotification: () =>{
  		return dispatch(countNotification())
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconNotification);
