//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens

import EditProfile from '../../screens/profile/editProfile';
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

// create a component
const ProfileStackNavigation = () => {
  const naviagtion = useNavigation();
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
              <Button title="back" onPress={() => naviagtion.goBack()} />
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
      </Stack.Group>
      {/* End : Edit Group Screen */}
      <Stack.Group>
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerTitle: 'Notification'}}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="JhatkaWallets"
          component={WalletWithJhatkaWallet}
          options={{headerTitle: 'Jhatka Wallet'}}
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
});

//make this component available to the app
export default ProfileStackNavigation;
