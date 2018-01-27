import { USER_AUTHENTICATED,
	RETREIVE_USER_PENDING, RETREIVE_USER_FULFILLED, RETREIVE_USER_REJECTED,
  UPDATE_USER_PENDING, UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED,
  RETREIVE_USER_DATAS_PENDING, RETREIVE_USER_DATAS_FULFILLED, RETREIVE_USER_DATAS_REJECTED,
  LIST_USER_SPITCH_PENDING, LIST_USER_SPITCH_FULFILLED, LIST_USER_SPITCH_REJECTED,
  NEXT_LIST_USER_SPITCH_PENDING, NEXT_LIST_USER_SPITCH_FULFILLED, NEXT_LIST_USER_SPITCH_REJECTED,
  LIST_USER_ASK_PENDING, LIST_USER_ASK_FULFILLED, LIST_USER_ASK_REJECTED,
  NEXT_LIST_USER_ASK_PENDING, NEXT_LIST_USER_ASK_FULFILLED, NEXT_LIST_USER_ASK_REJECTED,
  REMOVE_LIST_USER_SPITCH,  } from './UserConstants'

const INITIAL_STATE = {
  profile:{ pending:false, fulfilled:false, error:null, data:null },
  datas:{ pending:false, fulfilled:false, error:null, data:null },
  spitch:{ pending:false, fulfilled:false, error:null, list:[], nextPending: false, nextFetched: false },
  ask:{ pending:false, fulfilled:false, error:null, list:[], nextPending: false, nextFetched: false },
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
   

    case USER_AUTHENTICATED:
    	return { ...state, profile:{ ...state.profile, data:action.user } }

    case RETREIVE_USER_PENDING:
        return { ...state, profile: { ...state.profile, pending: true, fulfilled: false } }
    case RETREIVE_USER_FULFILLED:
        return { ...state, profile: { ...state.profile, pending: false, fulfilled: true, data: action.payload.data } }
    case RETREIVE_USER_REJECTED:
        return { ...state, profile: { ...state.profile, pending: false, error:action.payload.response } }

    case UPDATE_USER_PENDING:
        return { ...state, profile: { ...state.profile, pending: true} }
    case UPDATE_USER_FULFILLED:
        return { ...state, profile: { ...state.profile, pending: false, fulfilled: true, data: action.payload.data } }
    case UPDATE_USER_REJECTED:
        return { ...state, profile: { ...state.profile, pending: false, error:action.payload.response } }

    case RETREIVE_USER_DATAS_PENDING:
        return { ...state, datas: { ...state.datas, pending: true, fulfilled: false } }
    case RETREIVE_USER_DATAS_FULFILLED:
        return { ...state, datas: { ...state.datas, pending: false, fulfilled: true, data: action.payload.data } }
    case RETREIVE_USER_DATAS_REJECTED:
        return { ...state, datas: { ...state.datas, pending: false, error:action.payload.response } }

    case LIST_USER_SPITCH_PENDING:
        return { ...state, spitch: { ...state.spitch, pending: true, fulfilled: false, list: state.spitch.list.concat([{loader:true}]) } }
    case LIST_USER_SPITCH_REJECTED:
        return { ...state, spitch: { ...state.spitch, pending: false, error:action.payload.response } }
    case LIST_USER_SPITCH_FULFILLED:
        return { ...state, spitch: { ...state.spitch, pending: false, fulfilled: true, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined } } 
          }

    case NEXT_LIST_USER_SPITCH_PENDING:
        return { ...state, spitch: { ...state.spitch, pending: true, fulfilled: false } }
    case NEXT_LIST_USER_SPITCH_REJECTED:
        return { ...state, spitch: { ...state.spitch, pending: false, error:action.payload.response } }
    case NEXT_LIST_USER_SPITCH_FULFILLED:
        return { ...state, spitch: { ...state.spitch, pending: false, fulfilled: true, 
            list: state.spitch.list.concat(action.payload.data.results), 
            pagination: {...action.payload.data, results: undefined } } 
          }

    case LIST_USER_ASK_PENDING:
        return { ...state, ask: { ...state.ask, pending: true, fulfilled: false } }
    case LIST_USER_ASK_REJECTED:
        return { ...state, ask: { ...state.ask, pending: false, error:action.payload.response } }
    case LIST_USER_ASK_FULFILLED:
        return { ...state, ask: { ...state.ask, pending: false, fulfilled: true, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined } } 
          }


    case NEXT_LIST_USER_ASK_PENDING:
        return { ...state, ask: { ...state.ask, pending: true, fulfilled: false } }
    case NEXT_LIST_USER_ASK_REJECTED:
        return { ...state, ask: { ...state.ask, pending: false, error:action.payload.response } }
    case NEXT_LIST_USER_ASK_FULFILLED:
        return { ...state, ask: { ...state.ask, pending: false, fulfilled: true, 
            list: state.ask.list.concat(action.payload.data.results), 
            pagination: {...action.payload.data, results: undefined } } 
          }

    case REMOVE_LIST_USER_SPITCH:
        return { ...state, spitch: { ...state.spitch,  
            list: state.spitch.list.filter(function(item) {
               if(item.id != action.id){
                  return item
               }
            })
      }}

    default:
    	return state;
  }
}
