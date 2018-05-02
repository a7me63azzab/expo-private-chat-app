import React from 'react'
import {View, StyleSheet, Text,ImageBackground, Image} from 'react-native'


const Person = props => (
    <View style={{flex: 1,flexDirection: 'row'}}>
        <View style={{width: 50, height: 50,justifyContent:'center',alignItems:'center', backgroundColor: '#ffffff'}} >
            <View style={styles.img}>
                <Image
                    style={styles.img}
                    source={{uri:props.image}}
                />
                <View style={styles.dot}/>
                
            </View>
        </View>
        <View style={{width: 200, height: 50, backgroundColor: '#ffffff'}} >
             <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end',
           justifyContent:'center',width: 70,
            height: 50, backgroundColor: '#ffffff',
            paddingHorizontal:2,
            paddingVertical:2, 
             }} >
            <Text style={styles.time}>2 m</Text>
            <View style={styles.badge}>
                    <Text>30</Text>
                </View>
        </View>
  </View>
)

const styles = StyleSheet.create({
    person:{
        flex:1,
        paddingHorizontal:3,
        paddingVertical:3,
        flexDirection:'row',
        backgroundColor:'#ffffff',
    },
    img:{
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    dot:{
        position:'absolute',
        width:10,
        height:10,
        backgroundColor:'gold',
        borderRadius:50,
        bottom:0,
        right:0
    },
    time:{
        marginRight:4
    },
    name:{
        marginLeft:6
    },
    badge:{
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'silver'
    }
})


export default Person