import { connect } from 'react-redux';

import Facebook from '../components/Facebook'
import { verifAuthFacebook } from '../AuthActions'


function mapStateToProps(state, ownProps) {
  return { 
  	auth: state.auth.auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    verifAuthFacebook:(token) =>{
    	return dispatch(verifAuthFacebook(token))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Facebook);