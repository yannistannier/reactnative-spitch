import React, { Component } from 'react';
import { Text, View, Spinner } from 'native-base';

import Profile from '../../profile/components/Profile'


class UserProfile extends Component {

  constructor(props) { 
    super(props);
    this.nextListUserSpitch = this.nextListUserSpitch.bind(this)
    this.nextListUserAsk = this.nextListUserAsk.bind(this)
    this.refreshProfile = this.refreshProfile.bind(this)
    this.state={
    }
  }

  componentDidMount() {
    this.props.retreiveUserDatas(this.props.user.profile.data.id)
    this.props.listUserSpitch(this.props.user.profile.data.id)
    this.props.listUserAsk(this.props.user.profile.data.id)
  }

  nextListUserSpitch(){
    if(this.props.user.spitch.pagination)
        this.props.nextListUserSpitch(this.props.user.profile.data.id, this.props.user.spitch.pagination.next_cursor)
  }

  nextListUserAsk(){
    if(this.props.user.ask.pagination)
        this.props.nextListUserAsk(this.props.user.profile.data.id, this.props.user.ask.pagination.next_cursor)
  }

  refreshProfile(){
      this.props.retreiveUserDatas(this.props.user.profile.data.id)
      this.props.listUserSpitch(this.props.user.profile.data.id)
      this.props.listUserAsk(this.props.user.profile.data.id)
  }

  render() {
      const { user } = this.props

      return (
        <View style={{flex:1, marginBottom: 50}}>
            <Profile 
              user={user} 
              nextListSpitch={this.nextListUserSpitch} 
              nextListAsk={this.nextListUserAsk} 
              refreshProfile={this.refreshProfile} 
              me={true}
              deleteSpitch={this.props.deleteSpitch}/>
        </View>
      );
    
  }
}

export default UserProfile
