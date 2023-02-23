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
import AddItem from '../../screens/itempages/addItem';
import Item from '../../screens/itempages/item';
import ProductWithNameImageOnly from '../../components/Product/productwWthNameImageOnly';
// create a component
const HomeStackNavigation = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
      {/* Start: Edit Group Screen */}
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
      
             headerTitle: 'DashBoard',
          }}
        />
<Stack.Group>
        <Stack.Screen
          name="AddItems"
          component={AddItem}
          options={{headerTitle: 'Your Cart'}}
        />
        <Stack.Screen
          name="Items"
          component={Item}
          options={{headerTitle: 'Your Cart'}}
        />
          <Stack.Screen
          name="CartItemDetails"
          component={CartitemDetails}
          options={{headerTitle: 'Your Cart'}}
        />
         <Stack.Screen
          name="products"
          component={ProductWithNameImageOnly}
          options={{headerTitle: 'Your Cart'}}
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
export default HomeStackNavigation;