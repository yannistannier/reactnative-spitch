import { connect } from 'react-redux';

import ListRelation from '../components/ListRelation';

import { listFollow, followUser, unfollowUser, listFollower, activeFollowUser, unactiveFollowUser } from '../RelationActions';


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    relation: state.relation.relation
  };
}

function mapDispatchToProps(dispatch){
  return {
    listFollow: (id) => {
      return dispatch(listFollow(id))
    },
    listFollower: (id) => {
      return dispatch(listFollower(id))
    },
    listFollowSearch: (id, search) => {
      return dispatch(listFollow(id, search))
    },
    listFollowerSearch: (id, search) => {
      return dispatch(listFollower(id, search))
    },
    followFriend: (id) => {
      dispatch(activeFollowUser(id))
      return dispatch(followUser(id))
    },
    unfollowFriend: (id) => {
      dispatch(unactiveFollowUser(id))
    	return dispatch(unfollowUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListRelation);