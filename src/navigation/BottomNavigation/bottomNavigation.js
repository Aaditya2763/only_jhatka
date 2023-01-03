//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
// impor ioncs form react native vector as multiple name
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotifactionIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/MaterialIcons';
// Bottoms Screen
import Home from '../../screens/bottomScreen/home';

import ShoppingCart from '../../screens/bottomScreen/shoppingCart';
import Notification from '../../screens/bottomScreen/notification';
import Profile from '../../screens/bottomScreen/profile';
import BottomSheet from '@gorhom/bottom-sheet';
import {Color} from '../../constants/style/style';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

// import libbery
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
// Tab navigators
const Tab = createBottomTabNavigator();
const BottomNaviagtion = () => {
  return (
    <Provider store={store}>
    <BottomSheetModalProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            width: '100%',
            height: 74,
            backgroundColor: 'white',
          },
          tabBarActiveTintColor: Color.primaryColor,
          tabBarInactiveTintColor: 'rgba(45, 45, 45, 0.5)',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon name={'home'} size={size} color={color} />
            ),
            tabBarItemStyle: styles.tabBarStyle,
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={ShoppingCart}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <NotifactionIcon name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <ProfileIcon name="account-circle" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </BottomSheetModalProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopColor: Color.primaryColor,
    borderTopWidth: 2,
    marginLeft: 19,
  },
});
//make this component available to the app
export default BottomNaviagtion;
