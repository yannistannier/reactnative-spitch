var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;

export default {
  container: {
    flex: 1,
    width: null,
    height: null
  },
  content:{
    backgroundColor:"#f3f6f9",
  },
  header:{
    paddingBottom:5, 
    backgroundColor:"white",
  },
  datas:{
    height:65, 
    flexDirection: 'row', 
    paddingTop:15, 
    backgroundColor:"white"
  },
  btn:{
    paddingLeft:20, 
    paddingRight:20, 
    paddingTop:20, 
    paddingBottom:20, 
    backgroundColor:"white"
  },
  btnSize:{
    height:37
  },
  btnWeight:{
    fontWeight: '500'
  },
  btnWeightAbo:{
    fontWeight: '500',
    color:'white'
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
    flex:1
  },
  thumb:{
    top:50,
    width:100, 
    height:100,
    borderWidth:3, 
    borderColor:'#fff',
    borderRadius:50,
    zIndex: 1,
    position:'absolute'
  },
  headerBackground:{
    alignItems:"center",
    width:width
  },
  headerBottom:{
    flex: 1, 
    width:width, 
    backgroundColor:'white',
    paddingTop:50
  },

  btnChoice:{
    width:width/2,
    backgroundColor:'white',
    height:45,
    alignItems: 'center',
    justifyContent: 'center', 
    borderTopWidth: 0.5,
    borderTopColor: '#BABCBE',
  },
  btnSelect:{
    color:'#0064D4',
    fontSize:14
  },
  btnNoSelect:{
    fontSize:14
  },

  thumbSpitch:{
    width:width/2 - 5,
    height:width/2 - 5,
    marginRight:2.5,
    marginLeft:2.5,
    marginTop:5,
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft:10,
    paddingRight:10
  },
  thumbText:{
    color:"white",
    fontSize:18,
    textAlign:'center',
    backgroundColor:'transparent'
  },
  listViewWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listView: {
  },
  iconSetting:{
    position:'absolute', backgroundColor:'transparent',top:20,right:30
  },
  iconContact:{
    position:'absolute', backgroundColor:'transparent',top:20,left:30
  }



}; 