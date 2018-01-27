import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import routes from './routes';
import auth from './auth/AuthReducer';
import user from './user/UserReducer';
import relation from './relation/RelationReducer';
import visit from './visit/VisitReducer';
import ask from './ask/AskReducer';
import spitch from './spitch/SpitchReducer';
import feed from './feed/FeedReducer';
import notification from './notification/NotificationReducer';


const appReducer = combineReducers({
	routes,
	auth,
	user,
	relation,
	visit,
	ask,
	spitch,
	feed,
	notification,
	form
})

const rootReducer = (state, action) => {
	if (action.type === 'AUTH_LOGOUT') {
    	state = undefined
  	}

    return appReducer(state, action)
}

export default rootReducer;