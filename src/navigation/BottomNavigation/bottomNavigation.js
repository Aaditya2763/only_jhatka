//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Bottoms Screen
import Home from '../../screens/bottomScreen/home';
import ShoppingCart from '../../screens/bottomScreen/shoppingCart';
import Notification from '../../screens/bottomScreen/notification';
import Profile from '../../screens/bottomScreen/profile';

// Tab navigators
const Tab = createBottomTabNavigator();
const BottomNaviagtion = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default BottomNaviagtion;
