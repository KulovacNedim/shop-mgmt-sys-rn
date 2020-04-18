import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import MainNavigator from './navigation/MainNavigator';
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'light': require('./assets/fonts/Nunito-Light.ttf'),
    'light-italic': require('./assets/fonts/Nunito-LightItalic.ttf'),
    'regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'regular-italic': require('./assets/fonts/Nunito-Italic.ttf'),
    'semi-bold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'semi-bold-italic': require('./assets/fonts/Nunito-SemiBoldItalic.ttf'),
    'bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'bold-italic': require('./assets/fonts/Nunito-BoldItalic.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}