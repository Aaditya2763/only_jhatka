/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SetLocationScreen from './src/screens/setLocationScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  useEffect(() => {
    // splashScreen hide method
    SplashScreen.hide();
  }, []);
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={styles.Home}>
    //     <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    //     <Text style={styles.text}>HomeScreen</Text>
    //   </View>
    // </SafeAreaView>
    <SetLocationScreen />
  );
};

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
});

export default App;
