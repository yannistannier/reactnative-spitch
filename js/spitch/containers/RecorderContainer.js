import { connect } from 'react-redux';
import Recorder from '../components/Recorder';
import { Actions } from 'react-native-router-flux'
import { initSpitch, addClip, removeClip, uploadThumbnail } from '../SpitchActions'

function mapStateToProps(state, ownProps) {
  return {
  	spitch: state.spitch.recorder 
  };
}

function mapDispatchToProps(dispatch){
  return {
    back: () => {
        Actions.pop()
    },
    initSpitch: (id, text) => {
      return dispatch(initSpitch(id, text))
    },
  	addClip: (video) =>{
  		return dispatch(addClip(video))
  	},
    removeClip: () => {
      return dispatch(removeClip())
    },
    uploadThumbnail:(img) => {
      return dispatch(uploadThumbnail(img))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
