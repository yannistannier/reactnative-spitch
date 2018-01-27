var React = require('react-native');
var { Dimensions } = React; 

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    height: null,
    width: null
  },
  topcontainer:{
    flex:1,
    paddingTop:30
  },
  txtPhoto:{
    color:"#4162de",
    paddingTop:20, 
    paddingBottom:20,
    fontWeight:'500'
  },
  content:{
    paddingTop:30
  },
  form:{
    width:width * .85,
  },
  footer:{
    borderWidth:0,
    borderColor:'white',
    backgroundColor:'white',
    height:null, 
    paddingBottom:18,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0 
  },
  bodyfooter:{
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0
  },
}
