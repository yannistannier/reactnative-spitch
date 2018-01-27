import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

import {  RETREIVE_VISIT, RETREIVE_VISIT_DATAS, LIST_VISIT_SPITCH, NEXT_LIST_VISIT_SPITCH, 
	LIST_VISIT_ASK, NEXT_LIST_VISIT_ASK } from './VisitConstants'
import { api }  from '../utils/request'


export const retreiveVisit = (id) => {
  return {
      type: RETREIVE_VISIT,
      payload: api.get('user/'+id+'/')
  }
}

export const retreiveVisitDatas = (id) => {
	return {
      type: RETREIVE_VISIT_DATAS,
      payload: api.get('user/'+id+'/datas/')
  }
}

export const listVisitSpitch = (id) => {
	return {
      type: LIST_VISIT_SPITCH,
      payload: api.get('user/'+id+'/spitch/')
  }
}

export const nextListVisitSpitch = (id, cursor) => {
	return {
      type: NEXT_LIST_VISIT_SPITCH,
      payload: api.get('user/'+id+'/spitch/?cursor='+cursor)
  }
}

export const listVisitAsk = (id) => {
	return {
      type: LIST_VISIT_ASK,
      payload: api.get('user/'+id+'/ask/')
  }
}

export const nextListVisitAsk = (id, cursor) => {
	return {
      type: NEXT_LIST_VISIT_ASK,
      payload: api.get('user/'+id+'/ask/?cursor='+cursor)
  }
}


