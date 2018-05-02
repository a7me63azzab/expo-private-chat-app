import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
// import { PersistGate } from 'redux-persist/integration/react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

const appStore = configureStore()

import Main from './Main'
import RootNavigation from './src/Navigation/RootNavigation'


export default class App extends Component {
  render() {
    return (
      <Provider store={appStore.store}>
          <RootNavigation style={styles.container}>
                  <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                  />
          </RootNavigation>
     </Provider>
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

/*
 <Provider store={appStore.store}>
          <PersistGate loading={null} persistor={appStore.persistor}>
          <RootNavigation style={styles.container}>
                  <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                  />
              </RootNavigation>
          </PersistGate>
     </Provider>
*/