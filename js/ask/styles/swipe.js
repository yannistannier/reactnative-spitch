var React = require('react-native');
var { Dimensions } = React;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'black'
  },
  preview: {
    flex: 1,
    alignItems: 'center',
  },
  card:{
    paddingLeft:0,
    paddingRight:0,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    shadowOpacity: 0,
    elevation: 0,
    paddingBottom:5,
  },
  content:{
  	backgroundColor:"#f3f6f9",
  	marginTop:20
  },
  search:{
  	backgroundColor:"white",
  },
  separator:{
  	shadowOpacity: 0,
    elevation: 0,
    marginTop:10
  },
  close:{
    position:'absolute', 
    top:25, 
    right:25, 
    backgroundColor:'transparent', 
    zIndex:100},
  closeicon:{
    color:'white', 
    fontSize:38
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidebloc:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slidetxt:{
    fontSize:28,
    textAlign:'center',
    color:'white',
    paddingBottom:25,
  },
  slideimg:{
    flex: 1,
    position: 'absolute',
    top:0,
    width: Dimensions.get('window').width
  },
  slidebtn:{
    marginBottom:50
  }, 
  slideitem:{
    borderBottomWidth:0,
  },
  slideuser:{
    color:'white',
    paddingLeft:10
  },
  slideuser2:{
    color:'white',
    fontWeight:"700"
  },
  slidebtnSpitch:{
    width: Dimensions.get('window').width,
    paddingLeft:5,
    paddingRight:5,
    paddingBottom:5,
    opacity:0.8
  },
  btnSpitch:{
  }


}; 