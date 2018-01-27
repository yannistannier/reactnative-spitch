import { appAuthToken } from '../utils/storage'
import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import { USER_AUTHENTICATED, RETREIVE_USER, UPDATE_USER, RETREIVE_USER_DATAS, LIST_USER_SPITCH, NEXT_LIST_USER_SPITCH, 
	LIST_USER_ASK, NEXT_LIST_USER_ASK } from './UserConstants'
import { api }  from '../utils/request'


export const userAuthenticated = (user) => {
  return {
      type: USER_AUTHENTICATED,
      user
  }
}

export const retreiveUser = () => {
  return {
      type: RETREIVE_USER,
      payload: api.get('user/me/')
  }
}

export const updateUser = (values) => {
	return {
      type: RETREIVE_USER,
      payload: api.patch('user/me/', values)
  }
}

export const retreiveUserDatas = (id) => {
	return {
      type: RETREIVE_USER_DATAS,
      payload: api.get('user/'+id+'/datas/')
  }
}

export const listUserSpitch = (id) => {
	return {
      type: LIST_USER_SPITCH,
      payload: api.get('user/'+id+'/spitch/')
  }
}

export const nextListUserSpitch = (id, cursor) => {
	return {
      type: NEXT_LIST_USER_SPITCH,
      payload: api.get('user/'+id+'/spitch/?cursor='+cursor)
  }
}

export const listUserAsk = (id) => {
	return {
      type: LIST_USER_ASK,
      payload: api.get('user/'+id+'/ask/')
  }
}

export const nextListUserAsk = (id, cursor) => {
	return {
      type: NEXT_LIST_USER_ASK,
      payload: api.get('user/'+id+'/ask/?cursor='+cursor)
  }
}


