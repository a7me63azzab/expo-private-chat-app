import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';


//import navaigation
import MainTabNavigator from './MainTabNavigation'

//import Screens
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen'
import MessageScreen from '../screens/MessageScreen'

const RootStackNavigator = StackNavigator(
  {
    Signup: {
      screen: SignupScreen,
      navigationOptions:{
          header:null
      }
    },
    Login:{
      screen:LoginScreen,
      navigationOptions:{
        header:null
    }
    },
    Main:{
      screen:MainTabNavigator
    },
    Message:{
      screen:MessageScreen
    }
  },
{
    initialRouteName:'Login'
});

class RootNavigator extends Component {
  
  render() {
    return <RootStackNavigator />
  }

}

export default RootNavigator