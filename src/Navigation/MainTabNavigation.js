import React from 'react'
import {TabNavigator, TabBarTop} from 'react-navigation'
import { FontAwesome} from '@expo/vector-icons'

//import screens
import ChatScreen from '../screens/ChatScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UsersScreen from '../screens/UsersScreen'


export default MainTabNavigator = TabNavigator(
{
    Chat:{
        screen:ChatScreen
    },
    Profile:{
        screen:ProfileScreen
    },
    Users:{
        screen:UsersScreen
    },
},{
    navigationOptions:({navigation})=>(
        {
            tabBarIcon:({ focused, tintColor })=>{
                const { routeName } = navigation.state
                let iconName 
                switch (routeName) {
                    case 'Chat':
                        iconName = 'wechat'
                        break;
                    case 'Profile':
                        iconName = 'user-circle-o'
                        break;
                     case 'Users':
                        iconName ='users'
                        break;
                }
            return (
                <FontAwesome 
                        name={iconName}
                        size={25}
                        color={tintColor}/>
            )
            }
        }
    ),
    tabBarComponent:TabBarTop,
    initialRouteName:'Users',
    tabBarPosition:'top',
    tabBarOptions:{
          showIcon:true,
          showLabel:false,
          activeTintColor:'#ffffff',
          inactiveTintColor:'#1A237E'
    },
    animationEnabled: false,
    lazy:false,
    swipeEnabled: false,
})