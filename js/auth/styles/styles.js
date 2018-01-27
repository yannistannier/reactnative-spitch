var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  bgcontainer:{
    flex: 1,
    width: null,
    height: null
  },
  topcontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  botcontainer:{
    flex:1,
    alignItems: 'center',
  },
  logo:{
    width:90,
    height:90
  },
  textlogo:{
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 44,
    marginTop:10,
    color: 'white',
    fontFamily: 'SF UI Display',
    fontWeight: 'bold',
  },
  text:{
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    paddingLeft:20,
    paddingRight:20
  },
  footer:{
    position: 'absolute',
    alignItems: 'center',
    bottom:0,
    width:width,
    justifyContent: 'center', 
  },
  button1:{
    borderColor: 'white',
    height:55
  },
  textbutton1:{
    textAlign: 'center',
    color: 'white',
    width:width * .7,
  },
  button2:{
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop:20,
    marginBottom:30,
    height:55
  },
  textbutton2:{
    textAlign: 'center',
    color: '#0064D4',
    width:width * .7,
  }
}; 