// // import Liberry
import 'react-native-gesture-handler';
 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
 import BottomNaviagtion from './src/navigation/BottomNavigation/bottomNavigation';
// import Item from './src/screens/itempages/item';
import SplashScreen from './src/screens/splashScreen';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
 import { enableScreens } from 'react-native-screens';


// create a component
// import libbery
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import CartItemWithoutCoupon from './src/screens/cart/cartItemWithoutCoupon';
import CartitemDetails from './src/components/cart/CartItemDetails';
import Home from './src/screens/bottomScreen/home';
import EditProfile from './src/screens/profile/profile';

// if you want to switch Stack navigation change const isLogin = false;
const isLogin = true;
 const Loading = () => {};
const App = () => {
  return ( 
    <Provider store={store}>
    {/* <NavigationContainer>
      {isLogin ? <BottomNaviagtion /> : <StackNaviagtion />}
    </NavigationContainer> 
     */}
     <EditProfile/>

    </Provider>
  );
};

// //make this component available to the app
 export default App;
