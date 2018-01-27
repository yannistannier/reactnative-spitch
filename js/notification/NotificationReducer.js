import { LIST_NOTIFICATION_PENDING, LIST_NOTIFICATION_FULFILLED, LIST_NOTIFICATION_REJECTED,
    COUNT_NOTIFICATION_PENDING, COUNT_NOTIFICATION_FULFILLED, COUNT_NOTIFICATION_REJECTED,
    RESET_COUNT_NOTIFICATION,
    REFRESH_NOTIFICATION_PENDING, REFRESH_NOTIFICATION_FULFILLED, REFRESH_NOTIFICATION_REJECTED,
    NEXT_NOTIFICATION_PENDING, NEXT_NOTIFICATION_FULFILLED, NEXT_NOTIFICATION_REJECTED
} from './NotificationConstants'

const INITIAL_STATE = {
	pending: false, 
	error: null, 
	fulfilled: false,
	lists:[],
    count:0,
    refresh:false,
    pagination:null,
    nextPending: false, 
    nextFetched: false
};


export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case LIST_NOTIFICATION_PENDING:
        return { ...state, pending: true, fulfilled: false, error:null }
    case LIST_NOTIFICATION_FULFILLED:
        return { ...state, pending: false, fulfilled: true, error:null, lists: action.payload.data.items, pagination:action.payload.data.next  }
    case LIST_NOTIFICATION_REJECTED:
        return { ...state, pending: false, fulfilled: false, error:action.payload.response  }

    case COUNT_NOTIFICATION_PENDING:
        return { ...state }
    case COUNT_NOTIFICATION_FULFILLED:
        return { ...state, count: action.payload.data.count  }
    case COUNT_NOTIFICATION_REJECTED:
        return { ...state }

    case RESET_COUNT_NOTIFICATION:
        return { ...state, count: 0 }

    case REFRESH_NOTIFICATION_PENDING:
        return { ...state, refresh: true }
    case REFRESH_NOTIFICATION_FULFILLED:
        return { ...state, refresh: false, lists: action.payload.data.items  }
    case REFRESH_NOTIFICATION_REJECTED:
        return { ...state, refresh: false  }

    case NEXT_NOTIFICATION_PENDING:
        return { ...state, nextPending: true, nextFetched:false }
    case NEXT_NOTIFICATION_FULFILLED:
        return { ...state, nextPending: false, nextFetched:true, 
            lists: state.lists.concat(action.payload.data.items), pagination:action.payload.data.next  }
    case NEXT_NOTIFICATION_REJECTED:
        return { ...state, nextPending: false, nextFetched:false,  }
    
    
    default:
    	return state;
  }
}

