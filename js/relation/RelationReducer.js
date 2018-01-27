import { 
	LIST_FACEBOOK_FRIEND_PENDING, LIST_FACEBOOK_FRIEND_FULFILLED, LIST_FACEBOOK_FRIEND_REJECTED,
  LIST_RELATION_PENDING, LIST_RELATION_FULFILLED, LIST_RELATION_REJECTED,
  FOLLOW_USER_PENDING, FOLLOW_USER_FULFILLED, FOLLOW_USER_REJECTED,
  UNFOLLOW_USER_PENDING, UNFOLLOW_USER_FULFILLED, UNFOLLOW_USER_REJECTED,
  ACTIVE_FACEBOOK_FRIEND, UNACTIVE_FACEBOOK_FRIEND, ACTIVE_FOLLOW_USER, UNACTIVE_FOLLOW_USER,
  FOLLOW_ALL_USER_PENDING, FOLLOW_ALL_USER_FULFILLED, FOLLOW_ALL_USER_REJECTED, 
} from './RelationConstants'


const INITIAL_STATE = {
	facebook: { pending: false, fulfilled: false, error: null, list: []}, 
  follow:{ pending: false, fulfilled: false, error: null },
	relation:{ pending: false, fulfilled: false, error: null, list: []},
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case LIST_FACEBOOK_FRIEND_PENDING:
    	return { ...state, facebook: { pending: true, fulfilled: false, error: null, list: []} }
    case LIST_FACEBOOK_FRIEND_FULFILLED:
        return { ...state, facebook: { pending: false, fulfilled: true, error: null, list: action.payload.data} }
    case LIST_FACEBOOK_FRIEND_REJECTED:
        return { ...state, facebook: { pending: false, fulfilled: false, error: action.payload.response, list: []} }

    case LIST_RELATION_PENDING:
        return { ...state, relation: { pending: true, fulfilled: false, error:null } }
    case LIST_RELATION_FULFILLED:
        return { ...state, relation: { pending: false, fulfilled: true, error:null, list: action.payload.data } }
    case LIST_RELATION_REJECTED:
        return { ...state, relation: { pending: false, fulfilled: false, error:action.payload.response } }

    case FOLLOW_USER_PENDING:
        return { ...state, follow: { pending: true, fulfilled: false, error:null } }
    case FOLLOW_USER_FULFILLED:
        return { ...state, follow: { pending: false, fulfilled: true, error:null } }
    case FOLLOW_USER_REJECTED:
        return { ...state, follow: { pending: false, fulfilled: false, error:action.payload.response } }

    case UNFOLLOW_USER_PENDING:
        return { ...state, follow: { pending: true, fulfilled: false, error:null } }
    case UNFOLLOW_USER_FULFILLED:
        return { ...state, follow: { pending: false, fulfilled: true, error:null } }
    case UNFOLLOW_USER_REJECTED:
        return { ...state, follow: { pending: false, fulfilled: false, error:action.payload.response } }

    case FOLLOW_ALL_USER_PENDING:
        return { ...state, facebook: { ...state.facebook, pending: true, fulfilled: false} }
    case FOLLOW_ALL_USER_REJECTED:
        return { ...state, facebook: { ...state.facebook, pending: false, fulfilled: false, error:action.payload.response} }
    case FOLLOW_ALL_USER_FULFILLED:
        return { ...state, facebook: { ...state.facebook, pending: true, fulfilled: true, list : state.facebook.list.map(function(item) { 
                  item.follow = true
                  return item
              })}}

    

    case ACTIVE_FACEBOOK_FRIEND:
        return { 
            ...state,
            facebook: { ...state.facebook, 
                        list: state.facebook.list.map(function(item) {
                             if(item.id == action.id){
                                item.follow=true
                             }
                              return item
                          })
                    }
        }
    case UNACTIVE_FACEBOOK_FRIEND:
        return { 
            ...state,
            facebook: { ...state.facebook, 
                        list: state.facebook.list.map(function(item) {
                             if(item.id == action.id){
                                item.follow=false
                             }
                              return item
                          })
                    }
        }
      
    case ACTIVE_FOLLOW_USER:
        return { 
            ...state,
            relation: { ...state.relation, 
                        list: state.relation.list.map(function(item) {
                             if(item.id == action.id){
                                item.follow=true
                             }
                              return item
                          })
                    }
        }
    case UNACTIVE_FOLLOW_USER:
        return { 
            ...state,
            relation: { ...state.relation, 
                        list: state.relation.list.map(function(item) {
                             if(item.id == action.id){
                                item.follow=false
                             }
                              return item
                          })
                    }
        }

    
    default:
    	return state;
  }
}