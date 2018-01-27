import { connect } from 'react-redux';

import UserProfile from '../components/UserProfile' ;
import { retreiveUserDatas, listUserSpitch, nextListUserSpitch, listUserAsk, nextListUserAsk } from '../UserActions'
import { deleteSpitch } from '../../spitch/SpitchActions'

function mapStateToProps(state, ownProps) {
  return { 
  	user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return {
  	retreiveUserDatas:(id) =>{
  		return dispatch(retreiveUserDatas(id))
  	},
  	listUserSpitch:(id)=>{
  		return dispatch(listUserSpitch(id))
  	},
  	nextListUserSpitch:(id, cursor) =>{
  		return dispatch(nextListUserSpitch(id, cursor))
  	},
  	listUserAsk:(id) =>{
  		return dispatch(listUserAsk(id))
  	},
  	nextListUserAsk:(id, cursor) =>{
  		return dispatch(nextListUserAsk(id, cursor))
  	},
    deleteSpitch:(id) =>{
      return dispatch(deleteSpitch(id)).then(function(){
          dispatch({type:'REMOVE_LIST_USER_SPITCH', id})
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
