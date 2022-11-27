// import Liberry
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
import BottomNaviagtion from './src/navigation/BottomNavigation/bottomNavigation';
import SplashScreen from './src/screens/splashScreen';

// create a component

const isLogin = false;
const Loading = () => {};
const App = () => {
  return (
    <NavigationContainer>
      {isLogin ? <BottomNaviagtion /> : <StackNaviagtion />}
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
