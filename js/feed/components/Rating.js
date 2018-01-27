import React, { Component, Dimensions  } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Button } from 'native-base';

import { ButtonGradient, ButtonLoaderGradient } from '../../themes/base'
import I18n from '../../i18n';
import styles from '../styles/feed'


class Rating extends Component {

	constructor(props) {
	    super(props);
	    this.state={
	    	star:[0,0,0,0,0]
	    }
  	}

  	render() {
  		return (
  			<View style={styles.ratingView}>

  				<View style={styles.ratingBloc}>
  					<Text style={styles.text1}>Noter Spitch</Text>
  					<Text style={styles.text2}>Test blabla bla bla bla bla</Text>
  					<View style={styles.blocstar}>
  						<Image source={require('../../../assets/images/star2.png')} style={styles.star}  />
  						<Image source={require('../../../assets/images/star2.png')} style={styles.star}  />
  						<Image source={require('../../../assets/images/star2.png')} style={styles.star}  />
  						<Image source={require('../../../assets/images/star2.png')} style={styles.star}  />
  						<Image source={require('../../../assets/images/star2.png')} style={styles.star}  />
  					</View>

  					<View>
						<Button>
			             	<Text style={{color:'white'}}>VALIDER</Text>
			          	</Button>
  					</View>
  				</View>

  			</View>
  		);
  	}

}

export default Rating
