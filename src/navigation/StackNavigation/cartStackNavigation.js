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
import Home from '../../screens/bottomScreen/home';
import CartitemDetails from '../../components/cart/CartItemDetails';
import CartItemWithoutCoupon from '../../screens/cart/cartItemWithoutCoupon';
import CouponScreen from '../../screens/coupons/couponsScreen';
import CartItemWithCoupon from '../../screens/cart/cartItemWithCoupon';
import ChooseDeliveryScreen from '../../screens/deliveryScreen/chooseDeliveryScreen';
import PaymentOption from '../../screens/payments/paymentOption';
import NetBankingWithJhatkaWallet from '../../screens/payments/netbankingWithjhatkawallet';
import PaymentOptionWithJhatkaWalletAndPrimaryBtn from '../../screens/payments/paymentOptionWithjhatkaWalletAndPrimaryBtn';
import Wallet from '../../screens/payments/wallet';
import JhatkaWallet from '../../components/cards/jhatkaWallet';
import walletWithVoucher from '../../screens/payments/walletWithVoucher'
import PaymentOptionWithJhatkaWallet from '../../screens/payments/paymentOptionWithjhatkaWalletAndPrimaryBtn';
// create a component
const CartStackNavigation = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
      {/* Start: Edit Group Screen */}
      <Stack.Group>
        <Stack.Screen
          name="cartItemWithCoupon"
          component={CartItemWithoutCoupon}
          options={{
            headerLeft: () => (
              <Icon
                name="keyboard-backspace"
                size={24}
                color={'black'}
                onPress={() => navigation.goBack()}
              />
            ),
            headerTitle: 'Your Cart',
          }}
        />
        <Stack.Screen
          name="CartItemWithCoupon"
          component={CartItemWithCoupon}
          options={{headerTitle: 'Your Cart'}}
        />
        <Stack.Screen
          name="ChooseDeliveryScreen"
          component={ChooseDeliveryScreen}
          options={{headerTitle: 'Your Cart'}}
        />
         <Stack.Screen
          name="CouponScreen"
          component={CouponScreen}
          options={{headerTitle: 'Apply Coupon'}}
        />
          <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerTitle: 'Add Address'}}
        />
         <Stack.Group>
         <Stack.Screen
         name="PaymentOption"
         component={PaymentOptionWithJhatkaWallet}
          options={{headerTitle: 'Payment Option'}}
        />
          <Stack.Screen
          name="AddUpiScreen"
          component={AddUpiScreen}
          options={{headerTitle: 'Add UPI'}}
        />
          <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{headerTitle: 'Add New Card'}}
        />
          <Stack.Screen
          name="NetBanking"
          component={NetBankingWithJhatkaWallet}
          options={{headerTitle: 'Net Banking'}}
        />
           <Stack.Screen
          name="wallet"
          component={Wallet}
          options={{headerTitle: 'Use Other Wallet'}}
        />
           <Stack.Screen
          name="jhatkaWallet"
          component={PaymentOptionWithJhatkaWalletAndPrimaryBtn}
          options={{headerTitle: 'Jhatka Wallet'}}
        />

         </Stack.Group>
         <Stack.Screen
          name="AddMoneyVoucher"
          component={AddMoney}
          options={{headerTitle: 'Add Money'}}
        />
         <Stack.Screen
          name="AddVoucher"
          component={AddVoucher}
          options={{headerTitle: 'Add Money'}}
        />
         <Stack.Group>
          </Stack.Group>
        {/* <Stack.Screen
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
        /> */}
      </Stack.Group>
      {/* End : Edit Group Screen */}
      {/* <Stack.Group>
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
      </Stack.Group> */}
      {/* <Stack.Group>
        <Stack.Screen
          name="JhatkaWallets"
          component={WalletWithJhatkaWallet}
          options={{
            headerTitle: 'Jhatka Wallet',
          }}
        /> */}
        {/* <Stack.Group>
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
          /> */}
        {/* </Stack.Group> */}
        {/* <Stack.Screen
          name="addVoucher"
          component={AddVoucher}
          options={{headerTitle: 'Add Voucher'}}
        />
      </Stack.Group> */}
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
export default CartStackNavigation;