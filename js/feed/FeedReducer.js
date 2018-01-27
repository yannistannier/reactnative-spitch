import { LIST_FEED_PENDING, LIST_FEED_FULFILLED, LIST_FEED_REJECTED,
	NEXT_FEED_PENDING, NEXT_FEED_FULFILLED, NEXT_FEED_REJECTED,
    REFRESH_FEED_PENDING, REFRESH_FEED_FULFILLED, REFRESH_FEED_REJECTED,
    LIKE_FEED, DISLIKE_FEED,
    DELETE_FEED_PENDING, DELETE_FEED_FULFILLED, DELETE_FEED_REJECTED
} from './FeedConstants'


const INITIAL_STATE = {
	pending: false, 
	error: null, 
	fulfilled: false,
	pagination: null,
	nextPending: false, 
	nextFetched: false,
	refreshPending: false,
    actionPending:false,
	list:[]
};

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {

    case REFRESH_FEED_PENDING:
        return { ...state, refreshPending: true }
    case REFRESH_FEED_REJECTED:
        return { ...state, refreshPending: false  }
    case REFRESH_FEED_FULFILLED:
        return { ...state, 
            refreshPending: false, 
            list: action.payload.data.results, 
            pagination: {...action.payload.data, results: undefined}  }


    case LIST_FEED_PENDING:
        return { ...state, pending: true, fulfilled: false, error:null }
    case LIST_FEED_REJECTED:
        return { ...state, pending: false, fulfilled: false, error:action.payload.response  }
    case LIST_FEED_FULFILLED:
        return { ...state, 
        	pending: false, 
        	fulfilled: true, 
        	error:null, 
        	list: action.payload.data.results, 
        	pagination: {...action.payload.data, results: undefined}  }


    case NEXT_FEED_PENDING:
    	return { ...state, nextPending: true, nextFetched: false, error:null }
   	case NEXT_FEED_REJECTED:
    	return { ...state, nextPending: false, nextFetched: false, error:action.payload.response }
    case NEXT_FEED_FULFILLED:
        return { ...state, 
        	nextPending: false, 
        	nextFetched: true, 
        	error:null, 
        	list: state.list.concat(action.payload.data.results), 
        	pagination: {...action.payload.data, results: undefined}  }

    case DELETE_FEED_PENDING:
        return { ...state, error:null, actionPending:true }
    case DELETE_FEED_REJECTED:
        return { ...state, error:action.payload.response, actionPending:false  }
    case DELETE_FEED_FULFILLED:
        return { ...state,
            actionPending:false,
            list: state.list.map(function(item) {
                     if(item.id == action.payload.data.id){
                        item.feed_type = 0
                     }
                     return item
                  })
        }

    case LIKE_FEED:
        return { ...state,
            list: state.list.map(function(item) {
                 if(item.content_object.id == action.id){
                    item.content_object.likes=item.content_object.likes+1
                    item.content_object.is_liked = true
                 }
                  return item
              })
        }
    case DISLIKE_FEED:
        return { ...state,
            list: state.list.map(function(item) {
                 if(item.content_object.id == action.id){
                    item.content_object.likes=item.content_object.likes-1
                    item.content_object.is_liked = false
                 }
                  return item
              })
        }

    

    default:
    	return state;
  }
}