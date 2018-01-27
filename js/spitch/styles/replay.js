var React = require('react-native');
var { Dimensions } = React;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


export default {
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  fullScreen: {
    position: 'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    transform: [ {rotateY : "180deg"} ]
  }, 
  question:{
    position: 'absolute',
    top:0,
    width:width, 
    paddingTop:25,
    paddingLeft:10,
    alignItems: 'flex-start',
    borderBottomWidth:0,
    paddingRight:20,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  icon:{
    color:'white',
    fontSize:25
  },
  color:{
    color:'white',
    fontSize:20 
  },
   controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  next:{
    position: 'absolute',
    bottom:0,
    width:null,
    paddingBottom:40,
    borderBottomWidth:0,
    width:width, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  colornext:{
    color:'#455eea',
    fontSize:20,
    fontWeight:'400'
  },
  loader:{
    position: 'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundColor:"rgba(0, 0, 0, 0.5)",
    alignItems: 'center', 
    justifyContent: 'center',
  },
  blocloader:{
    backgroundColor:"rgba(0, 0, 0, 0.8)",
    paddingLeft:25,
    paddingRight:25,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  spinner:{
    paddingTop:30
  }
}; 