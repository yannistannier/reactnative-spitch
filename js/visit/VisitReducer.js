import { RETREIVE_VISIT_PENDING, RETREIVE_VISIT_FULFILLED, RETREIVE_VISIT_REJECTED,
  RETREIVE_VISIT_DATAS_PENDING, RETREIVE_VISIT_DATAS_FULFILLED, RETREIVE_VISIT_DATAS_REJECTED,
  LIST_VISIT_SPITCH_PENDING, LIST_VISIT_SPITCH_FULFILLED, LIST_VISIT_SPITCH_REJECTED,
  NEXT_LIST_VISIT_SPITCH_PENDING, NEXT_LIST_VISIT_SPITCH_FULFILLED, NEXT_LIST_VISIT_SPITCH_REJECTED,
  LIST_VISIT_ASK_PENDING, LIST_VISIT_ASK_FULFILLED, LIST_VISIT_ASK_REJECTED,
  NEXT_LIST_VISIT_ASK_PENDING, NEXT_LIST_VISIT_ASK_FULFILLED, NEXT_LIST_VISIT_ASK_REJECTED,
  UNFOLLOW_VISIT } from './VisitConstants'

const INITIAL_STATE = {
  profile:{ pending:false, fulfilled:false, error:null, data:null },
  datas:{ pending:false, fulfilled:false, error:null, data:null },
  spitch:{ pending:false, fulfilled:false, error:null, list:[], nextPending: false, nextFetched: false },
  ask:{ pending:false, fulfilled:false, error:null, list:[], nextPending: false, nextFetched: false },
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
   

    case RETREIVE_VISIT_PENDING:
        return { ...state, profile: { ...state.profile, pending: true, fulfilled: false } }
    case RETREIVE_VISIT_FULFILLED:
        return { ...state, profile: { ...state.profile, pending: false, fulfilled: true, data: action.payload.data } }
    case RETREIVE_VISIT_REJECTED:
        return { ...state, profile: { ...state.profile, pending: false, error:action.payload.response } }

    case RETREIVE_VISIT_DATAS_PENDING:
        return { ...state, datas: { ...state.datas, pending: true, fulfilled: false } }
    case RETREIVE_VISIT_DATAS_FULFILLED:
        return { ...state, datas: { ...state.datas, pending: false, fulfilled: true, data: action.payload.data } }
    case RETREIVE_VISIT_DATAS_REJECTED:
        return { ...state, datas: { ...state.datas, pending: false, error:action.payload.response } }

    case LIST_VISIT_SPITCH_PENDING:
        return { ...state, spitch: { ...state.spitch, pending: true, fulfilled: false, list: state.spitch.list.concat([{loader:true}]) } }
    case LIST_VISIT_SPITCH_REJECTED:
        return { ...state, spitch: { ...state.spitch, pending: false, error:action.payload.response } }
    case LIST_VISIT_SPITCH_FULFILLED:
        return { ...state, spitch: { ...state.spitch, pending: false, fulfilled: true, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined } } 
          }

    case NEXT_LIST_VISIT_SPITCH_PENDING:
        return { ...state, spitch: { ...state.spitch, pending: true, fulfilled: false } }
    case NEXT_LIST_VISIT_SPITCH_REJECTED:
        return { ...state, spitch: { ...state.spitch, pending: false, error:action.payload.response } }
    case NEXT_LIST_VISIT_SPITCH_FULFILLED:
        return { ...state, spitch: { ...state.spitch, pending: false, fulfilled: true, 
            list: state.spitch.list.concat(action.payload.data.results), 
            pagination: {...action.payload.data, results: undefined } } 
          }

    case LIST_VISIT_ASK_PENDING:
        return { ...state, ask: { ...state.ask, pending: true, fulfilled: false } }
    case LIST_VISIT_ASK_REJECTED:
        return { ...state, ask: { ...state.ask, pending: false, error:action.payload.response } }
    case LIST_VISIT_ASK_FULFILLED:
        return { ...state, ask: { ...state.ask, pending: false, fulfilled: true, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined } } 
          }


    case NEXT_LIST_VISIT_ASK_PENDING:
        return { ...state, ask: { ...state.ask, pending: true, fulfilled: false } }
    case NEXT_LIST_VISIT_ASK_REJECTED:
        return { ...state, ask: { ...state.ask, pending: false, error:action.payload.response } }
    case NEXT_LIST_VISIT_ASK_FULFILLED:
        return { ...state, ask: { ...state.ask, pending: false, fulfilled: true, 
            list: state.ask.list.concat(action.payload.data.results), 
            pagination: {...action.payload.data, results: undefined } } 
          }


    case UNFOLLOW_VISIT:
      var newdata = state.profile.data
      newdata.follow = false
      return { ...state, profile: { ...state.profile, data : newdata } }


    default:
    	return state;
  }
}
