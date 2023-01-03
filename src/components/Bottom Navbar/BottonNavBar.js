import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SetLocationScreen from '../../screens/setLocationScreen';
// import SetDelveryLoactionScreen from "../../screens/setDeliveryLocationScreen";

const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();
  return ( 
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="setDeliveryLocationScreen"
          Component={SetLocationScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default BottomNavBar;
