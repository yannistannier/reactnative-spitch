
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Spinner, Content, Footer, List, ListItem, Thumbnail, Text, Body, Left, Right, Separator, Button, Icon} from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';

import styles from '../styles/facebook'
import I18n from '../../i18n';


class ListFriend extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

  }

  componentDidMount() {
    this.props.listFacebookFriend();
  }

  followAll(){
      this.props.followAll()
      if(this.props.register){
          Actions.tabbar({type: ActionConst.RESET})
          // Actions.swipeask()
      }
  }

  renderList(){
      const { facebook } = this.props;

      if(facebook.error){

        return(
          <ListItem >
            <Text style={{color: 'red'}}>{I18n.t('listFacebook_text1')}</Text>
          </ListItem>
        )

      } else if (facebook.fulfilled) {

        return facebook.list.map((friend, index) => {

          return(
              <ListItem avatar key={index}>
                  <Left>
                      <Thumbnail small source={{uri:friend.photo+".115x115"}} />
                  </Left>
                  <Body>
                      <Text>{friend.first_name} {friend.last_name}</Text>
                      <Text note>@{friend.username}</Text>
                  </Body>
                  <Right>
                    {friend.follow &&
                      <Button small bordered onPress={() => this.props.unfollowUser(friend.id) }>
                          <Icon name='checkmark' style={{color:'blue'}}/>
                      </Button>
                      ||
                      <Button small primary onPress={() => this.props.followUser(friend.id) }>
                          <Text>{I18n.t('listFacebook_btn1')}</Text>
                      </Button>
                    }
                  </Right>
              </ListItem>
          )
        });

      }else{
          return(
              <ListItem style={{ alignItems:'center', 'justifyContent':'center'}}>
                  <Spinner color='blue' />
              </ListItem>
            )
      }
  }

  render() {
    

    return (
      <Container style={styles.container}>
        
        <Content>
            <Separator bordered>
                  <Text>{I18n.t('listFacebook_text2')}</Text>
            </Separator>

             <List>
                {this.renderList()}
             </List>


        </Content>

         <Footer transparant style={styles.footer}>
            <View style={{alignItems: 'center'}}>
                  <Button style={styles.buttonfooter} onPress={ () => this.followAll()}>
                      <Text>{I18n.t('listFacebook_btn2')}</Text>
                  </Button>
            </View> 
          </Footer>

      </Container>
    );
  }
}


export default ListFriend
