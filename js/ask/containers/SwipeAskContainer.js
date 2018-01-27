import { connect } from 'react-redux';
import SwipeAsk from '../components/SwipeAsk';

import { swipeAsk, nextSwipeAsk } from '../AskActions'


function mapStateToProps(state, ownProps) {
  return { 
  	swipe: state.ask.swipe
  };
}

function mapDispatchToProps(dispatch){
  return {
  	swipeAsk: () => {
      return dispatch(swipeAsk())
    },
    nextSwipeAsk: (cursor) => {
    	return dispatch(nextSwipeAsk(cursor))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SwipeAsk);
