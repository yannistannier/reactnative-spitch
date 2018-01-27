import { AUTH_REQUESTED,
  AUTH_PENDING, AUTH_FULFILLED, AUTH_REJECTED,
  AUTH_USER_NOT_EXISTS_PENDING, AUTH_USER_NOT_EXISTS_FULFILLED, AUTH_USER_NOT_EXISTS_REJECTED,
  AUTH_REGISTER_FACEBOOK_PENDING, AUTH_REGISTER_FACEBOOK_FULFILLED, AUTH_REGISTER_FACEBOOK_REJECTED  } from './AuthConstants'

const INITIAL_STATE = {
  auth:{ status: null, pending:false, fulfilled:false, error:null},
  register:{ status: null, pending:false, fulfilled:false, error:null},
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
   

    case AUTH_REQUESTED:
    	return { ...state, auth:{ ...state.auth, status:'unauthorized' } }


    case AUTH_PENDING:// sign up user, set loading = true and status = signup
      return { ...state, auth:{ ...state.auth, pending:true, fulfilled:false }}
    case AUTH_FULFILLED://return user, status = authenticated and make loading = false
      return { ...state, auth:{ ...state.auth, pending:false, fulfilled:true, status:'authenticated' }}
    case AUTH_REJECTED:// return error and make loading = false  
      return { ...state, auth:{ ...state.auth, pending:false, fulfilled:false, error:action.payload.response}}

    case AUTH_USER_NOT_EXISTS_PENDING:// sign up user, set loading = true and status = signup
      return { ...state, register:{ ...state.register, pending:true}}
    case AUTH_USER_NOT_EXISTS_FULFILLED://return user, status = authenticated and make loading = false
      return { ...state, register:{ ...state.register}}
    case AUTH_USER_NOT_EXISTS_REJECTED:// return error and make loading = false  
      return { ...state, register:{ ...state.register, pending:false, error:action.payload}}


    case AUTH_REGISTER_FACEBOOK_PENDING:// sign up user, set loading = true and status = signup
      return { ...state, register:{ ...state.register, pending:true, fulfilled:false}}
    case AUTH_REGISTER_FACEBOOK_FULFILLED://return user, status = authenticated and make loading = false
      return { ...state, register:{ ...state.register, pending:false, fulfilled:true}}
    case AUTH_REGISTER_FACEBOOK_REJECTED:// return error and make loading = false  
      return { ...state, register:{ ...state.register, pending:false, fulfilled:true, error:action.payload.response}}
    
    default:
    	return state;
  }
}
