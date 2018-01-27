var React = require('react-native');

var { Dimensions } = React; 

var width = Dimensions.get('window').width;


export default {
	inputGroup:{
		borderColor:'#9B9B9B',
		marginTop:10,
		marginBottom:10
	},
	inputGroupError:{
		borderColor:'red',
		marginTop:10,
		marginBottom:10,
	},
	buttonGradient:{
		padding:0,
		width:width,
		alignItems: 'center',
	},
	imageButtonGradient:{
		resizeMode: 'contain',
		width:width * .85,
		alignItems: 'center',
		justifyContent: 'center', 
	},
	textButtonGradient:{
		backgroundColor: 'rgba(0,0,0,0)',
		color:'white',
		fontSize:18
	},
	buttonFacebook:{
    	width:width * .85,
    	height:50,
    	backgroundColor:'#3C5A99'
    },

    buttonFacebookWhite:{
    	width:width * .85,
    	height:50,
    	backgroundColor:'transparent',
    	borderWidth:1,
    	borderColor:'white'
    },
    textFacebook:{
  		flex: 1,
    	textAlign: 'center',
    	color: 'white',
    },

    viewButtonTransparent:{
    	width:width * .84,
    	backgroundColor:'white',
    	flex:1,
    	marginTop:2,
    	marginBottom:2,
    	borderTopLeftRadius:6,
    	borderTopRightRadius:6,
    	borderBottomLeftRadius:6,
    	borderBottomRightRadius:6,
    	alignItems: 'center',
		justifyContent: 'center', 
    },
    textButtonTransparent:{
		backgroundColor: 'rgba(0,0,0,0)',
		color:'#3023AE',
		fontSize:18
	},
	loader:{
	    position: 'absolute',
	    top:50,
	    bottom:0,
	    right:0,
	    left:0,
	    // backgroundColor:"rgba(0, 0, 0, 0.5)",
	    alignItems: 'center', 
	    justifyContent: 'center',
	  },
	  blocloader:{
	    backgroundColor:"rgba(0, 0, 0, 0.8)",
	    paddingLeft:25,
	    paddingRight:25,
	    borderRadius: 10
	  },
	  centerloader:{
	  	flex:1,
	  	alignItems: 'center',
		justifyContent: 'center', 
	  }
}