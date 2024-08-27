import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from '@store/store'; // Using alias

export default function App() {
  return (
  <Provider store={store}>

    <AppNavigator />
  </Provider>
  );
}
