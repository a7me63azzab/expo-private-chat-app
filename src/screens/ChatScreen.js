import React, {Component} from 'react'
import {View, StyleSheet,Button,Text} from 'react-native'


class Chat extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        console.log('navigation--->',this.props.navigation)
        return(
            <View style={styles.container}>
               <Text>Chat Screen</Text>
               <Button onPress={()=>this.props.navigation.navigate('Chat')}
               title="Press Me"
               />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#455a64'
    }
  });

  export default Chat