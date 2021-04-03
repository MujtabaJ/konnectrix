
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppNavigator from './src/Navigation/AppNavigator';

import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/Redux/Store';

const {store, persistor} = configureStore()

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
};


export default App;
