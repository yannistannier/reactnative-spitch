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
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  botcontainer:{
    flex:1,
    alignItems: 'center',
  }
}; 