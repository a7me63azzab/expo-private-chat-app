import React, {Component} from 'react'

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';



import RootNavigation from './src/Navigation/RootNavigation'


export default class Main  extends Component {
  render() {
    return (
              <RootNavigation style={styles.container}>
                  <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                  />
              </RootNavigation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#455a64',
  }
});