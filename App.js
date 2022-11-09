/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SetLocationScreen from './src/screens/setLocationScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  useEffect(() => {
    // splashScreen hide method
    SplashScreen.hide();
  }, []);
  return <SetLocationScreen />;
};

export default App;
