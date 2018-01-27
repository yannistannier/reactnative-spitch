import React, { Component } from 'react';
import { Text, View, Spinner } from 'native-base';

import { Actions, ActionConst } from 'react-native-router-flux'
import Profile from '../../profile/components/Profile'


class VisitProfile extends Component {

  constructor(props) { 
    super(props);
    this.nextListVisitSpitch = this.nextListVisitSpitch.bind(this)
    this.nextListVisitAsk = this.nextListVisitAsk.bind(this)
    this.refreshProfile = this.refreshProfile.bind(this)
    this.state={
    }
  }

  componentDidMount() {
    this.props.retreiveVisit(this.props.id)
    this.props.retreiveVisitDatas(this.props.id)
    this.props.listVisitSpitch(this.props.id)
    this.props.listVisitAsk(this.props.id)
  }

  nextListVisitSpitch(){
    if(this.props.visit.spitch.pagination)
        this.props.nextListVisitSpitch(this.props.id, this.props.visit.spitch.pagination.next_cursor)
  }

  nextListVisitAsk(){
    if(this.props.visit.ask.pagination)
        this.props.nextListVisitAsk(this.props.id, this.props.visit.ask.pagination.next_cursor)
  }

  refreshProfile(){
      this.props.retreiveVisitDatas(this.props.id)
      this.props.listVisitSpitch(this.props.id)
      this.props.listVisitAsk(this.props.id)
  }

  // componentWillReceiveProps(nextProps) {
    
  //   if(nextProps.visit.profile.fulfilled){
  //     if(nextProps.visit.profile.data.id == this.props.user.profile.data.id){
  //       console.log('okkk')
  //     }
  //   }
  // }

  render() {
      const { visit } = this.props

      return (
        <View style={{flex:1}}>
            {visit.profile.fulfilled &&
              <Profile user={visit} nextListSpitch={this.nextListVisitSpitch} nextListAsk={this.nextListVisitAsk} refreshProfile={this.refreshProfile} />
            }
        </View>
      );
    
  }
}

export default VisitProfile
