import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/settings'
import I18n from '../../i18n';


class UserSettings extends Component {

  constructor(props) { 
    super(props);
    this.state={
    }
  }

 // <ListItem icon last>
 //                      <Body>
 //                        <Text>{I18n.t('userSettings_text3')}</Text>
 //                      </Body>
 //                      <Right>
 //                          <Icon name="arrow-forward" />
 //                      </Right>
 //                  </ListItem>

 //                  <ListItem itemDivider>
 //                      <Text>{I18n.t('userSettings_text4')}</Text>
 //                  </ListItem> 

 //                  <ListItem icon>
 //                      <Body>
 //                        <Text>{I18n.t('userSettings_text5')}</Text>
 //                      </Body>
 //                      <Right>
 //                          <Switch value={true} />
 //                      </Right>
 //                  </ListItem> 

  render() {
    const { user, logout } = this.props

    return(
      <Container>
          <Content>

                  <ListItem itemDivider >
                      <Text>{I18n.t('userSettings_text1')}</Text>
                  </ListItem>  

                  <ListItem icon >
                      <Body >
                        <Text>{I18n.t('userSettings_text2')}</Text>
                      </Body>
                      <Right>
                          <Text>{user.email}</Text>
                          <Icon name="arrow-forward" />
                      </Right>
                  </ListItem>

                 
                  
                    <ListItem >
                        <TouchableOpacity onPress={() => logout() } style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'flex-start',  }}>
                            <Text style={{color:'red', textAlign: 'left'}}>{I18n.t('userSettings_text6')}</Text>
                        </TouchableOpacity>
                    </ListItem> 
                  

                 
 
          </Content>
      </Container>
    );
    
  }
}

export default UserSettings
