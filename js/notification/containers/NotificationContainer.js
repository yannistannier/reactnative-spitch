import { connect } from 'react-redux';
import Notification from '../components/Notification';

import { listNotification, resetCountNotification, refreshListNotification, nextListNotification } from '../NotificationActions'

import { followUser, unfollowUser} from '../../relation/RelationActions'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user,
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch){
  return {
  	listNotification: () => {
  		return dispatch(listNotification())
  	},
    refreshListNotification:() => {
      return dispatch(refreshListNotification())
    },
    nextListNotification:(value) => {
      return dispatch(nextListNotification(value))
    },
  	resetCountNotification:() => {
  		return dispatch(resetCountNotification())
  	},
    followUser: (id) => {
      return dispatch(followUser(id))
    },
    unfollowUser: (id) => {
      return dispatch(unfollowUser(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
