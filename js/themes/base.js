import React, { Component } from 'react';
import { TouchableOpacity, Image} from 'react-native';
import { Text, Icon, Button, Spinner , View} from 'native-base';

import styles from './styles'

export class ButtonGradient extends Component {

  render() {
      const { onPress } = this.props;
      return (
          <TouchableOpacity style={styles.buttonGradient} onPress={onPress} >
            <Image 
                source={require('../../assets/images/btn.png')}
                style={styles.imageButtonGradient}>
                
                <Text style={styles.textButtonGradient}>
                  {this.props.text}
                </Text>
              </Image>
          </TouchableOpacity>
      )
  }
}


export class ButtonTransparent extends Component {

  render() {
      const { onPress } = this.props;
      return (
          <TouchableOpacity onPress={onPress} >
              <Image 
                    source={require('../../assets/images/btn.png')}
                    style={styles.imageButtonGradient}>

                    <View style={styles.viewButtonTransparent}>
                      <Text style={styles.textButtonTransparent}>
                        {this.props.text}
                      </Text>
                    </View>
         
              </Image>
          </TouchableOpacity>
          
      )
  }
}

export class ButtonLoaderGradient extends Component {

  render() {

      const { onPress } = this.props;

      return (
              <Image 
                source={require('../../assets/images/btn.png')}
                style={styles.imageButtonGradient}>
                <Spinner color='white' small />
              </Image>
      )
  }
}


export class ButtonFacebook extends Component {

  render() {

      const { onPress } = this.props;

      return (
           <Button style={styles.buttonFacebook} iconLeft onPress={onPress}>
             <Icon name='logo-facebook' />
             <Text style={styles.textFacebook}>{this.props.text}</Text>
          </Button>
      )
  }
}


export class FullLoader extends Component {

  render() {

      return (
              <View style={styles.loader}>
                <View style={styles.blocloader}>
                  <Spinner color='white'/>
                </View>
              </View>
      )
  }
}


export class ButtonSpitch extends Component {

  render() {
      const { onPress } = this.props;
      return (
          <TouchableOpacity onPress={onPress} >
              <Image source={require('../../assets/images/btn-spitch.png')} style={{width:140, height:45}}/>
          </TouchableOpacity>
          
      )
  }
}


export class CenterLoader extends Component {

  render() {

      return (
              <View style={styles.centerloader}>
                  <Spinner color='#ccc'/>
              </View>
      )
  }
}
