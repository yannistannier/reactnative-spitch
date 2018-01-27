import { Alert } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'
import RNFetchBlob from 'react-native-fetch-blob'

import { api, API_ROOT_URL }  from '../utils/request'
import { appAuthToken } from '../utils/storage'
import { INIT_NEW_SPITH, ADD_CLIP_NEW_SPITCH, REMOVE_CLIP_NEW_SPITCH, MERGE_CLIP_NEW_SPITCH, LIKE_SPITCH, RETRIEVE_SPITCH,
  LIST_SPITCH_ASK, NEXT_LIST_SPITCH_ASK, REPORT_SPITCH, DELETE_SPITCH, RESET_MERGE_CLIP_NEW_SPITCH } from './SpitchConstants'



export const listSpitchAsk = (id) => {
  return {
        type: LIST_SPITCH_ASK,
        payload: api.get('ask/'+id+'/swipe/')
  }
}

export const nextListSpitchAsk = (id, cursor) => {
  return {
        type: NEXT_LIST_SPITCH_ASK,
        payload: api.get('ask/'+id+'/swipe/?cursor='+cursor)
  }
}

export const retrieveSpitch = (id) => {
  return {
        type: RETRIEVE_SPITCH,
        payload: api.get('spitch/'+id+'/')
  }
}


export const reportSpitch = (spitch) => {
  return {
        type: REPORT_SPITCH,
        payload: api.post('report/', {spitch})
  }
}

export const deleteSpitch = (id) => {
  return {
        type: DELETE_SPITCH,
        payload: api.patch('spitch/'+id+'/delete/', {})
  }
}

export const likeSpitch = (spitch) => {
  return {
        type: LIKE_SPITCH,
        payload: api.post('like/', {spitch})
  }
}

export const initSpitch = (id, text) => {
	return {
      type: INIT_NEW_SPITH,
      new: {id, text}
  } 
}

export const addClip = (video) => {
  console.log(video)
	return {
      type: ADD_CLIP_NEW_SPITCH,
      clip: video
  } 
}

export const removeClip = () => {
	return {
      type: REMOVE_CLIP_NEW_SPITCH
  } 
}

export const mergeClip = (video) => {
  return {
      type: MERGE_CLIP_NEW_SPITCH,
      video:video
  } 
}

export const resetMergeClip = (video) => {
	return {
      type: RESET_MERGE_CLIP_NEW_SPITCH
  } 
}


export const uploadSpitch = (id, video) => { // A voir
  return function(dispatch) {

    dispatch({type:'UPLOAD_SPITCH_PENDING'})

    
    appAuthToken.getSessionToken()
        .then((token) => {
            
           name = Date.now().toString() 
           RNFetchBlob.fetch('POST', API_ROOT_URL+'ask/'+id+'/spitch/', {
                Authorization : "Token "+token,
                'Content-Disposition': 'attachment; filename='+name+'.mov',
                timeout:0
            }, RNFetchBlob.wrap(video))
           .uploadProgress({ interval : 100 },(written, total) => {
                  var progress = (written / total)*100
                  console.log('uploaded', progress)
                  dispatch({type:'UPLOAD_PROGRESS_SPITCH', progress:Math.round(progress) })
            })
            .then((res) => {

              
              let link = res.json().video
              let thumb = res.json().thumb 

              RNFetchBlob
                .config({
                  path : RNFetchBlob.fs.dirs.DocumentDir + '/userThumbnails/'+name+'.mp4'
                })
                .fetch('GET', link, {
                })
                .then((res) => { 
                  console.log('The file saved to ', res.path())
                  dispatch({type:'UPLOAD_SPITCH_FULFILLED', video:res.path(), thumb:thumb })
                  // Actions.share()

                })

            })
            .catch((err) => {
              console.log(err)
              dispatch({type:'UPLOAD_SPITCH_FULFILLED', video:err })
            })
        })

  }
}