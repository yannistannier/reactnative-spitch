import { connect } from 'react-redux';

import Contact from '../components/Contact';


function mapStateToProps(state, ownProps) {
  return { 
  	user : state.user.profile.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
