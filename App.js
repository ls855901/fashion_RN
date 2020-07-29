import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore} from './store/store';
import {Provider} from 'react-redux';

const App = () => {
  const store = createStore();
  return (
    <Provider {...{store}}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
