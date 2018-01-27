import { connect } from 'react-redux';
import UserSettings from '../components/UserSettings';

import { logout } from '../../auth/AuthActions'


function mapStateToProps(state, ownProps) {
  return { 
    user: state.user.profile.data,
  };
}

function mapDispatchToProps(dispatch){
  return {
  	logout: () => {
  		dispatch(logout())
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
