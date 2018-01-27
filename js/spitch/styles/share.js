var React = require('react-native');


export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  fullScreen: {
    position: 'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0
  }, 
  content:{
  	backgroundColor: 'rgba(0,0,0,0)',
  	flex: 1,
  },
  ask:{
  	flex:1,
  	backgroundColor: 'rgba(61,95,231,0.5)',
  	alignItems: 'center',
    justifyContent: 'center', 
  },
  asktext:{
  	color:'white',
  	fontSize:26,
  	paddingLeft:15,
  	paddingRight:15,
  	textAlign: 'center',
  },
  subcontent:{
  	height:130,
  	backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  bloc:{
  	paddingLeft:20,
  	paddingRight:20,
    borderWidth:0,
    borderColor:'transparent'
  },
  bloctext:{
  	color:"black",
  	fontSize:20,
  	paddingLeft:20
  },
  blocbtn:{
  	position: 'absolute',
    bottom:20,
    width:null,
    alignItems: 'center', 
    justifyContent: 'center',
  }
}; 