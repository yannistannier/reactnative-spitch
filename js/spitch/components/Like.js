import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Text, Item, Icon } from 'native-base';


class Like extends Component {

  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this)
    this.state = {
      is_liked:this.props.is_liked,
      likes:this.props.likes
    };
  }

  handleLike(){
    this.props.likeSpitch(this.props.id)
    if(this.state.is_liked){
      this.setState({likes: this.state.likes - 1})
      this.props.dislikeFeed(this.props.id)
    }
    else{
      this.setState({likes: this.state.likes + 1})
      this.props.likeFeed(this.props.id)
    }
    this.setState({is_liked: !this.state.is_liked})
  }

  // handleLike(){
  //   this.props.likeSpitch(this.props.id)
  //   if(this.props.is_liked){
  //     this.props.likes = this.props.likes - 1
  //   }
  //   else{
  //     this.props.likes = this.props.likes + 1
  //     this.props.likeFeed(this.props.id)
  //   }
  //   this.props.is_liked = !this.props.is_liked
  // }


  componentWillReceiveProps(nextProps) {
     if(this.props.feed){
        this.setState({
          is_liked:this.props.is_liked,
          likes:this.props.likes
        })
      }

      if(nextProps.id != this.props.id){
        this.setState({
          is_liked:this.props.is_liked,
          likes:this.props.likes
        })
      }
  }

  render() {

    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Item style={{alignItems: 'center', borderColor:'transparent'}}>
              <TouchableOpacity onPress={() => this.handleLike()}>
                { this.state.is_liked && 
                 <Icon name="ios-heart" style={{color: '#e62117', fontSize:28}} />
                 ||
                 <Icon name="ios-heart-outline" style={{color:this.props.color ? this.props.color : "#0064D4", fontSize:28}} />
                }

              </TouchableOpacity>
              <Text style={{color:(this.props.color ? this.props.color : "#000")}}>{this.state.likes}</Text>
            </Item>
        </View>
    )
  }
}



export default Like