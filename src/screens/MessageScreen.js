import React, {Component} from 'react'
import {View, StyleSheet,TextInput,TouchableOpacity,Text} from 'react-native'
import { Container, Header,Thumbnail, Content, Footer } from 'native-base';

import { FontAwesome} from '@expo/vector-icons'


class MessageScreen extends Component{


    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
            headerTitle: <View style={{flexDirection:'row'}}>
                            <View>
                                <Thumbnail source={{uri:params.image}} />
                                <View style={{
                                    position:'absolute',
                                    width:15,
                                    height:15,
                                    backgroundColor:'gold',
                                    borderRadius:50,
                                    bottom:0,
                                    right:0
                                }}/>
                        </View>
                        <Text style={{marginLeft:5,color:'#ffffff'}}>{params.name}</Text>
                    </View>,
            headerStyle:{
                backgroundColor:'#6200EA',
            },
            headerTintColor:'#fff'
        }
      };

 

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <Container>
            <Content >
                <Text>chat body</Text>
            </Content>
            <Footer>
                <View style={styles.box}>
                    <TextInput
                            style={styles.message}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Enter your message'
                    />
                    <TouchableOpacity>
                        <FontAwesome 
                                name='send'
                                size={25}
                                color='#ffffff'/>
                    </TouchableOpacity>
                </View>
            </Footer>
          </Container>
            
        )
    }
}

const styles = StyleSheet.create({
    
    box:{
       flex:1,
       flexDirection:'row',
       justifyContent:'flex-start',
       alignItems:'center',
    },
    message:{
        width:300,
        height:50,
        backgroundColor:'#ffffff',
        borderRadius:25,
        borderColor:'red',
        paddingHorizontal:16,
        marginHorizontal:5,
        marginVertical:10,
        fontSize:16,
    }
  });

  export default MessageScreen



  /** 
   container:{
        flex: 1,
        paddingHorizontal:6,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffffff'
    },
    overlay:{
       backgroundColor:'#ffffff',
       width:370,
       flex:1,
       flexDirection:'row',
       justifyContent:'flex-start',
       alignItems:'center',
       opacity: 0.8,
       borderColor:'red',
       borderWidth:3,
       height:100,
       position:'absolute',
       bottom:0
    },

  <View style={styles.container}>
               <Text>The duplicate image technique requires
                    maintaining a blurred image along with the original,
                     which can become a pain if you need to reuse the effect 
                     for multiple images. For example, responsive designs may require
                      swapping in different images at different screen sizes. Or, template
                       layouts may drop in images dynamically (eg, a different header image
                        for every blog post). For these cases, it would be nice to generate 
                        the effect using only the source image. After all, we're just blurring
                         it.
                         The above CSS will create our blurred and lightened overlay.
                          We also need to shift the overlay down to the bottom of the page,
                           leaving just enough space to view the header text. Since the blurred image is 
                           a child of the overlay, we also need to shift it back up by the opposite amount in order
                            to keep it aligned with the body background.
                          Because the demo uses transitions, I chose to use CSS 
                          While filters such as contrast, saturate, and blur have 
                          existed in image editors for some time, delivering them o
                          n the web has historically required serving images with those
                           filters already applied. As browsers begin to incorporate filters as part
                            of the web platform, we can begin breaking down complex visual effects into their
                             component parts, and implementing them on the web. This article will examine one such
                              effect, frosted glass, and how CSS filters provide a cleaner, more flexible solution 
                              than static images.
                         </Text>
               
               <View style={styles.overlay}>
                   <TextInput
                        style={styles.message}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder='Enter your message'
                        placeholderTextColor='#fff'
                   />
                   <TouchableOpacity>
                    <FontAwesome 
                            name='send'
                            size={25}
                            color='#00695C'/>
                   </TouchableOpacity>
               </View>
            </View>
  */