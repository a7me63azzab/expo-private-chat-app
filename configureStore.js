import {createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk'
import rootReducer from './src/store/reducers/index'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {

  const store = createStore(persistedReducer, applyMiddleware(thunk))
  // const store = createStore(() => {}); // if there is no any reducer
  const persistor = persistStore(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // This fetch the new state of the above reducers.
    module.hot.accept('./src/store/reducers', () => {
      const nextRootReducer = require('./src/store/reducers/index')
      store.replaceReducer(
            persistReducer(persistConfig, nextRootReducer)
          )
    })
  }

  const appStore = {
    store:store,
    persistor:persistor
  }


  return appStore
}