import { connect } from 'react-redux';
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Replay from '../components/Replay';
import { uploadSpitch, mergeClip, uploadTest, resetMergeClip } from '../SpitchActions'


function mapStateToProps(state, ownProps) {
  return {
  	spitch: state.spitch.recorder 
  };
}

function mapDispatchToProps(dispatch){
  return {
    uploadSpitch: (id, video) => {
      return dispatch(uploadSpitch(id, video))
    },
    mergeClip:(video) => {
      return dispatch(mergeClip(video))
    },
    resetMergeClip:() => {
      return dispatch(resetMergeClip())
    },
    uploadPending:() =>{
      dispatch({type:'UPLOAD_SPITCH_PENDING'})
    },
    uploadFulfilled:(video, thumb) =>{
      dispatch({type:'UPLOAD_SPITCH_FULFILLED', video, thumb })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Replay);
