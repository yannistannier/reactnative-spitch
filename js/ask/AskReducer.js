import { 
    SWIPE_ASK_PENDING, SWIPE_ASK_FULFILLED, SWIPE_ASK_REJECTED,
    NEXT_SWIPE_ASK_PENDING, NEXT_SWIPE_ASK_FULFILLED, NEXT_SWIPE_ASK_REJECTED,
    CREATE_ASK_PENDING, CREATE_ASK_FULFILLED, CREATE_ASK_REJECTED,
} from './AskConstants'

const INITIAL_STATE = {
    swipe: { pending: false, fulfilled: false, error: null, items: [], pagination: null}, 
	create: { pending: false, fulfilled: false, error: null }, 
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
    
    case CREATE_ASK_PENDING:
        return { ...state, create: { pending: true, fulfilled: false, error: null} }
    case CREATE_ASK_FULFILLED:
        return { ...state, create: { pending: false, fulfilled: true, error:null } }
    case CREATE_ASK_REJECTED:
        return { ...state, create: { pending: false, fulfilled: false, error:action.payload.response } }


    case SWIPE_ASK_PENDING:
        return { ...state, swipe: { ...state.swipe, pending: true, fulfilled: false, error: null} }
    case SWIPE_ASK_REJECTED:
        return { ...state, swipe: { ...state.swipe, pending: false, fulfilled: false, error:action.payload.response } }
    case SWIPE_ASK_FULFILLED:
        return {
         ...state, swipe: { 
            ...state.swipe, 
            pending: false, 
            fulfilled: true, 
            error:null, 
            items: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined }  
        }}

    case NEXT_SWIPE_ASK_PENDING:
        return { ...state, swipe: { ...state.swipe, pending: true, fulfilled: false, error: null} }
    case NEXT_SWIPE_ASK_REJECTED:
        return { ...state, swipe: { ...state.swipe, pending: false, fulfilled: false, error:action.payload.response } }
    case NEXT_SWIPE_ASK_FULFILLED:
        // var items = state.asks.items
        // var last = items.pop()
        // var new_list = items.concat(action.payload.data.results)
        var new_list = state.swipe.items
        return {
         ...state, swipe: { 
            ...state.swipe, 
            pending: false, 
            fulfilled: true, 
            error:null, 
            items: new_list.concat(action.payload.data.results), 
            pagination: {...action.payload.data, results: undefined }  
        }}

    
    default:
    	return state;
  }
}
