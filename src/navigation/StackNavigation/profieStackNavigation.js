//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens

import EditProfile from '../../screens/profile/editProfile';
import AddaddressMapSceen from '../../screens/mapsScreen/addMapScreens';
import Profile from '../../screens/profile/profile';
import AddAddress from '../../screens/addAddress/addAddress';
import NotificationScreen from '../../screens/notification/NotificationScreen';
import WalletWithJhatkaWallet from '../../screens/payments/walletWithJhatkaWallet';
import AddVoucher from '../../screens/voucher/addVoucher';
import AddMoney from '../../screens/voucher/addMoney';
// import BottomNaviagtion from '../BottomNavigation/bottomNavigation';
import {useNavigation} from '@react-navigation/native';
import AddUpiScreen from '../../screens/Upi/addUpiScreen';
import AddCard from '../../screens/card/AddCard';
import {Color} from '../../constants/style/style';
import BackButton from '../../assets/icons/backButton.png';
import IconButton from '../../constants/ui/button/iconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
const ProfileStackNavigation = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
      {/* Start: Edit Group Screen */}
      <Stack.Group>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerLeft: () => (
              <Icon
                name="keyboard-backspace"
                size={24}
                color={'black'}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: 'Profile',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerTitle: 'Edit Profile'}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerTitle: 'Add address'}}
        />
        <Stack.Screen
          name="AddaddressMap"
          component={AddaddressMapSceen}
          options={{
            headerTitle: 'Add Address',
            headerLeft: () => (
              <IconButton
                onPress={() => navigation.navigate('AddAddress')}
                source={BackButton}
                style={styles.iconSize}
              />
            ),
          }}
        />
      </Stack.Group>
      {/* End : Edit Group Screen */}
      <Stack.Group>
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            headerTitle: 'Notification',
            headerRight: () => (
              <TouchableOpacity>
                <Text style={styles.buttonStyle}>Clear all</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="JhatkaWallets"
          component={WalletWithJhatkaWallet}
          options={{
            headerTitle: 'Jhatka Wallet',
          }}
        />
        <Stack.Group>
          <Stack.Screen
            name="addMoney"
            component={AddMoney}
            options={{headerTitle: 'Add Money'}}
          />
          <Stack.Screen
            name="addUpiScreen"
            component={AddUpiScreen}
            options={{headerTitle: 'Apply UPI ID'}}
          />
          <Stack.Screen
            name="addCard"
            component={AddCard}
            options={{headerTitle: 'Add New Card'}}
          />
        </Stack.Group>
        <Stack.Screen
          name="addVoucher"
          component={AddVoucher}
          options={{headerTitle: 'Add Voucher'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  buttonStyle: {
    color: Color.primaryColor,
    fontWeight: '700',
    fontFamily: 'Poppins-Meddium',
  },
});

//make this component available to the app
export default ProfileStackNavigation;
