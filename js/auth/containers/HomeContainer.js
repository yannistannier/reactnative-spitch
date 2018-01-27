import { connect } from 'react-redux';

import Home from '../components/Home' ;
import { verifyAccessToken } from '../AuthActions'


function mapStateToProps(state, ownProps) {
  return { 
  	auth: state.auth.auth
  };
}

function mapDispatchToProps(dispatch){
  return {
    verifyAccessToken:() => {
    	return dispatch(verifyAccessToken())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
