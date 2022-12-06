// import Liberry
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
import BottomNaviagtion from './src/navigation/BottomNavigation/bottomNavigation';
// import SplashScreen from './src/screens/splashScreen';

// create a component

// if you want to switch Stack navigation change const isLogin = false;
const isLogin = true;
// const Loading = () => {};
const App = () => {
  return (
    <NavigationContainer>
      {isLogin ? <BottomNaviagtion /> : <StackNaviagtion />}
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
