import React, {Component} from 'react'
import {View, Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native'


class LoginForm extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                 placeholder='Email'
                 placeholderTextColor='#ffffff'
                 style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                 placeholder='Password'
                 placeholderTextColor='#ffffff'
                 secureTextEntry={true}
                 style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },
    button:{
        width:300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        paddingVertical:12,
        marginVertical:10,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
})

export default LoginForm