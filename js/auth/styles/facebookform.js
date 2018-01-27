var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:10
  },
  padcontainer:{
    paddingBottom:height * 0.25
  },
  btnfb:{
    width:width * .85,
    height:50,
    backgroundColor:'#3C5A99'
  },
  textfb:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  btntwt:{
    marginTop:30,
    height:50,
    width:width * .85,
    backgroundColor:'#1DA1F2'
  },
  texttwt:{
  	flex: 1,
    textAlign: 'center',
    color: 'white',
  },
  txt:{
  	color:'#BABCBE',
  	marginTop:50,
  	fontSize:18,
  	textAlign:'center'
  },
  email:{
  	color:'#0064D4',  	
  	fontSize:18,
  	textAlign:'center'
  },
  bguser:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:30,
    marginTop:10
  },
  imguser:{
    width:115,
    height:115,
    borderRadius: 57
  },
  footer:{
    position: 'absolute',
    bottom:0,
    paddingBottom:30
  },
  textwelcolme:{
    fontSize:25
  },
  form:{
    width:width * .85,
    marginTop:30
  },
  formopen:{
    width:width * .85,
    marginTop:10
  }
}