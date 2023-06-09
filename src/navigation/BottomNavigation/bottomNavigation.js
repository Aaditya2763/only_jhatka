//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
// impor ioncs form react native vector as multiple name
import Icon from 'react-native-vector-icons/MaterialIcons';
import NotifactionIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileIcon from 'react-native-vector-icons/MaterialIcons';
// Bottoms Screen
import Home from '../../screens/bottomScreen/home';

import ShoppingCart from '../../screens/bottomScreen/shoppingCart';
import Notification from '../../screens/bottomScreen/notification';
import Profile from '../../screens/bottomScreen/profile';
import {Color} from '../../constants/style/style';
import {responsiveScreenHeight} from 'react-native-responsive-dimensions';
import BackButton from 'react-native-vector-icons/MaterialIcons';

// Profile Stack navigation
import ProfileStackNavigation from '../StackNavigation/profieStackNavigation';
import {useNavigation} from '@react-navigation/native';
import cartStackNavigation from '../StackNavigation/cartStackNavigation';
import CartStackNavigation from '../StackNavigation/cartStackNavigation';
import HomeStackNavigation from '../StackNavigation/homeStackNavigation';
import StackNaviagtion from '../StackNavigation/stackNavigation';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

// Tab navigators
const Tab = createBottomTabNavigator();
const BottomNaviagtion = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        
       
        tabBarStyle: {
          
          width: '100%',
          height: responsiveScreenHeight(7),
          backgroundColor: 'white',
        },
        tabBarActiveTintColor: Color.primaryColor,
        tabBarInactiveTintColor: 'rgba(45, 45, 45, 0.5)',
      }}>
         <Tab.Screen
        name="splashScreen"
        component={StackNaviagtion}
       options={{
        tabBarStyle:{
          display:'none',
        
        },
        tabBarIcon: ({focused, color, size}) => (
          <Icon name={'search'} size={size} color={color} />
      
        ) 
        
       }}
      />
      <Tab.Screen
        name="HomeStackNavigation"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={'home'} size={size} color={color} />
          ),
        
        }}
      />
      <Tab.Screen
        name="CartStackNavigation"
        component={CartStackNavigation}
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
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitle: 'Notifications',
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.buttonStyle} onPress={() => navigation.goBack()}>Clear all</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <Icon
              name="keyboard-backspace"
              size={24}
              color={'black'}
              onPress={() => navigation.goBack()}
            />
          ),
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontWeight: '600',
            lineHeight: 30,
            textAlign: 'center',
            fontSize: 18,
            color: 'black',
          },
        }}
      />
      <Tab.Screen
        name="ProfileStackNavigation"
        component={ProfileStackNavigation}
        options={{
          headerShown: false,
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          
          // headerLeft: ({pressOpacity}) => (
          //   <BackButton name="keyboard-backspace" color={'black'} size={24} />
          // ),
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '500',
            fontFamily: 'Poppins-Medium',
            // marginHorizontal: 27,
          },
          tabBarIcon: ({color, size}) => (
            <ProfileIcon name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopColor: Color.primaryColor,
    borderTopWidth: 2,
    marginLeft: 19,
  },
  buttonStyle: {
    color: Color.primaryColor,
    fontWeight: '700',
    fontFamily: 'Poppins-Meddium',
  },
});
//make this component available to the app
export default BottomNaviagtion;
