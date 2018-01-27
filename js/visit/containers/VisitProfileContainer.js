import { connect } from 'react-redux';

import VisitProfile from '../components/VisitProfile' ;

import { retreiveVisit, retreiveVisitDatas, listVisitSpitch, nextListVisitSpitch, listVisitAsk, nextListVisitAsk } from '../VisitActions'

function mapStateToProps(state, ownProps) {
  return { 
  	visit: state.visit,
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return {
  	retreiveVisitDatas:(id) =>{
      return dispatch(retreiveVisitDatas(id))
    },
    retreiveVisit:(id) =>{
  		return dispatch(retreiveVisit(id))
  	},
  	listVisitSpitch:(id)=>{
  		return dispatch(listVisitSpitch(id))
  	},
  	nextListVisitSpitch:(id, cursor) =>{
  		return dispatch(nextListVisitSpitch(id, cursor))
  	},
  	listVisitAsk:(id) =>{
  		return dispatch(listVisitAsk(id))
  	},
  	nextListVisitAsk:(id, cursor) =>{
  		return dispatch(nextListVisitAsk(id, cursor))
  	}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(VisitProfile);
