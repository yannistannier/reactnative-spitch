var React = require('react-native');
var { Dimensions } = React;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
  },
  controls:{ 
    flex: 1,
    width:width,
    position: 'absolute',
    alignItems: 'center',
    bottom:0
  },
  recorder:{
  	backgroundColor: 'rgba(0,0,0,0)',
  },
  blocrecord:{
  	alignItems:'center',
  	position: 'absolute',
  	bottom:20
  },
  startrecord:{
  	 position: 'absolute',
  	 bottom:20
  },
  startrecordsize:{
  	width:60, 
  	height:60,
  },
  nobtnsend:{
    backgroundColor: 'rgba(0,0,0,0)'
  },
  btncontrol:{
    position:'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    right:20,
    top:height/2 -90,
    alignItems: 'center',
  },
  btnsend:{
  	position: 'absolute',
  	bottom:32,
  	right:20,
  	width:50,
  	height:50,
  	alignItems: 'center',
  	justifyContent: 'center',
  	backgroundColor:"white",
  	borderRadius:25,
  	paddingLeft:5,
  	paddingTop:2
  },
  btndelete:{
    position: 'absolute',
    bottom:20,
    left:20,
    width:70,
    height:70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  back:{
    width:60, 
    height:60,
  },
  question:{
  	width:width-5,
  	paddingTop:25,
  	paddingLeft:10,
  	alignItems: 'flex-start',
  	borderBottomWidth:0,
    paddingRight:20
  },
  icon:{
  	color:'white',
  	fontSize:28
  },
  color:{
  	color:'white',
  	fontSize:20
  }
}; 