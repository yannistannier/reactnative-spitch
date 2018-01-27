import { connect } from 'react-redux';
import SwipeVideo from '../components/SwipeVideo';

import { listSpitchAsk, nextListSpitchAsk } from '../SpitchActions'

function mapStateToProps(state, ownProps) {
  return {
  	videos: state.spitch.videos 
  };
}

function mapDispatchToProps(dispatch){
  return {
    listSpitchAsk: (id) => {
    	return dispatch(listSpitchAsk(id))
    },
    nextListSpitchAsk: (id, cursor) => {
    	return dispatch(nextListSpitchAsk(id, cursor))
    },
    resetVideos:() => {
    	return dispatch({type:'RESET_VIDEOS'})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SwipeVideo);
