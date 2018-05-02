import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem,Badge, Left, Body, Right, Thumbnail, Text } from 'native-base'
import firebaseApp from '../js/firebase'
import _ from 'lodash'
import Person from '../components/Person'

var database= firebaseApp.database();



class Users extends Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentWillMount(){
         //get all users
         database.ref('/users').on('value',(snapshot)=>{
            if(snapshot.val() !== null){
                this._getAllUsers(snapshot.val());
            }
        });
    }


    _getAllUsers(values){
        let usersVal = values;
        let users = _(usersVal)
        .keys()
        .map(userKey => {
            let clonedUser = _.clone(usersVal[userKey]);
            return clonedUser;
        }).value();
        console.log('users:=>',users);
        this.setState({
            users:users
        });

    }



    render(){
        return(
            <Container>
            <Header />
            <Content>
              <List>
              {
                  this.state.users.map((user,i)=>{
                      return(
                        <ListItem avatar onPress={()=>this.props.navigation.navigate('Message',{
                            image:user.imageUrl,
                            name:user.name
                        })}>
                            <Left>
                                 <Thumbnail source={{ uri: user.imageUrl }} />
                                 <View style={styles.dot}/>
                            </Left>
                            <Body>
                                 <Text>{user.name}</Text>
                                 <Text note>{user.email}</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                                <Badge primary >
                                    <Text>2</Text>
                                </Badge>
                            </Right>
                      </ListItem>
                      )
                  })
              }
                
              </List>
            </Content>
          </Container>
        )
    }
}



  export default Users

const styles = StyleSheet.create({
    dot:{
        position:'absolute',
        width:15,
        height:15,
        backgroundColor:'gold',
        borderRadius:50,
        bottom:0,
        right:0
    }
})
