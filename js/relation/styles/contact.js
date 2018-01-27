var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  topcontainer:{
    flex:1.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botcontainer:{
    flex:1,
    alignItems: 'center'
  },
  bguser:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  imguser:{
    width:115,
    height:115,
    borderRadius: 57
  },
  text:{
    textAlign:'center',
    paddingTop:20,
    width: width * 0.7
  },
  next:{
    color:'#BABCBE',
    fontSize:18,
  }
}; 