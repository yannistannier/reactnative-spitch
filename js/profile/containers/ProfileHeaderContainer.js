import { connect } from 'react-redux';

import ProfileHeader from '../components/ProfileHeader';
import { followUser, unfollowUser } from '../../relation/RelationActions'


function mapStateToProps(state, ownProps) {
  return { 
    current_user : state.user.profile.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    followUser: (id) => {
    	return dispatch(followUser(id))
    },
    unfollowUser: (id) => {
    	return dispatch(unfollowUser(id))
    },
    unfollowVisit:(id) => {
    	return dispatch({type:"UNFOLLOW_VISIT"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
