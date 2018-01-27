import { connect } from 'react-redux';
import ListFeed from '../components/ListFeed' ;

import { listFeed, nextFeed, refreshFeed } from '../FeedActions'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
    feed: state.feed
  };
}

function mapDispatchToProps(dispatch){
  return {
  	listFeed: () => {
      return dispatch(listFeed())
    },
    refreshFeed: () => {
  		return dispatch(refreshFeed())
  	},
  	nextFeed: (cursor) => {
  		return dispatch(nextFeed(cursor))
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListFeed);
