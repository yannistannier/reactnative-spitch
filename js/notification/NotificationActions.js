import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { LIST_NOTIFICATION, COUNT_NOTIFICATION, RESET_COUNT_NOTIFICATION, REFRESH_NOTIFICATION, NEXT_NOTIFICATION } from './NotificationConstants'
import { api }  from '../utils/request'


export const listNotification = (values) => {
  return {
      type: LIST_NOTIFICATION,
      payload: api.get('notification/')
  } 
}

export const refreshListNotification = (values) => {
  return {
      type: REFRESH_NOTIFICATION,
      payload: api.get('notification/')
  } 
}

export const nextListNotification = (values) => {
  return {
      type: NEXT_NOTIFICATION,
      payload: api.get('notification/?page='+values)
  } 
}


export const countNotification = () => {
  return {
      type: COUNT_NOTIFICATION,
      payload: api.get('notification/count/')
  } 
}

export const resetCountNotification = () => {
  return {
      type: RESET_COUNT_NOTIFICATION
  } 
}
