import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { SWIPE_ASK, NEXT_SWIPE_ASK, CREATE_ASK } from './AskConstants'
import { api }  from '../utils/request'


export const createAsk = (values) => {
  return {
      type: CREATE_ASK,
      payload: api.post('/ask/', values)
  } 
}

export const swipeAsk = () => {
  return {
      type: SWIPE_ASK,
      payload: api.get('ask/list/')
  } 
}

export const nextSwipeAsk = (cursor) => {
  return {
      type: NEXT_SWIPE_ASK,
      payload: api.get('ask/list/?cursor='+cursor)
  } 
}
