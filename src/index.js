/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ThemeContext } from './config/theme/theme-context';
import { default as themecolor } from './config/theme/custom-theme.json';


// import './config/ReactotronConfig';
import 'react-native-gesture-handler';

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);
// console.disableYellowBox = true;

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from './store';

import App from './pages/auth/authOrApp';

const IndexApp = () =>{

  const [theme, setTheme] = useState('light');
  // const darkthemeState = store.getState().config.darktheme

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    // const nextTheme = darkthemeState ? 'dark' : 'light';
    setTheme(nextTheme);
  };


  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{ ...eva[theme], ...themecolor }}>
            <PersistGate persistor={persistor}>
              {/* <StatusBar backgroundColor="#212b46" barStyle="light-content" /> */}
              <StatusBar backgroundColor={theme === 'light' ? '#ffffff' : '#1A1D52'} barStyle={ theme === 'light' ? 'dark-content' : 'light-content'} />
              <App />
            </PersistGate>
          </ApplicationProvider>
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}

export default IndexApp;
