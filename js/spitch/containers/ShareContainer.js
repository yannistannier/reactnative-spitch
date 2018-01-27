import { connect } from 'react-redux';

import Share from '../components/Share';

function mapStateToProps(state, ownProps) {
  return {
  	spitch: state.spitch.recorder 
  };
}


export default connect(mapStateToProps, null)(Share);
