import React, {Component} from 'react'
import {View, StyleSheet,Text,Image} from 'react-native'

class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                />
                <Text style={styles.welcome}>Welcome to chat app.</Text>
            </View>
        )
    }
}

export default Logo

const styles = StyleSheet.create(
    {
        container: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems:'center',
          },
          welcome:{
              marginVertical:15,
              fontSize:20,
              color:'rgba(255,255,255,0.7)'
          }
    }
);