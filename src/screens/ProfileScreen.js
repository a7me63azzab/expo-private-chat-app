import React, {Component} from 'react'
import {View, StyleSheet,Text} from 'react-native'


class Profile extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style={styles.container}>
               <Text>Profile Screen</Text>
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

  export default Profile

