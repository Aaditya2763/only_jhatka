// // import Liberry
// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
import BottomNaviagtion from './src/navigation/BottomNavigation/bottomNavigation';
// import Item from './src/screens/itempages/item';
import SplashScreen from './src/screens/splashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

// import libbery
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import CartItemWithoutCoupon from './src/screens/cart/cartItemWithoutCoupon';
import CartitemDetails from './src/components/cart/CartItemDetails';
import Home from './src/screens/bottomScreen/home';
import EditProfile from './src/screens/profile/profile';
import Profile from './src/screens/profile/profile';
import CartItemWithCoupon from './src/screens/cart/cartItemWithCoupon';
import AddAddress from './src/screens/addAddress/addAddress';
import Item from './src/screens/itempages/item';
import AddItem from './src/screens/itempages/addItem';
import CouponScreen from './src/screens/coupons/couponsScreen';
import ChooseDeliveryScreen from './src/screens/deliveryScreen/chooseDeliveryScreen';
import NotificationScreen from './src/screens/notification/NotificationScreen';
import PaymentOption from './src/screens/payments/paymentOption';
import AddUpiScreen from './src/screens/Upi/addUpiScreen';
import AddCard from './src/screens/card/AddCard';
import Wallet from './src/screens/payments/wallet';
import NetBAnkingSearchBar from './src/components/searchbar/netBankingSearchBar';
import NetBanking from './src/screens/payments/netBanking';
import PaymentOptionWithJhatkaWalletAndPrimaryBtn from './src/screens/payments/paymentOptionWithjhatkaWallet';
import SmallPrimaryButton from './src/constants/ui/button/smallPrimaryButton';
import WalletWithJhatkaWallet from './src/screens/payments/walletWithJhatkaWallet';
import JhatkaWallet from './src/components/cards/jhatkaWallet';
import JhatkaWalletWithBtn from './src/constants/ui/button/jhatkaWalletWithPrimaryBtn';
import NetBankingWithJhatkaWallet from './src/screens/payments/netbankingWithjhatkawallet';
import AddVoucher from './src/screens/voucher/addVoucher';


// if you want to switch Stack navigation change const isLogin = false;
const isLogin =true;
const Loading = ({ }) => { };
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLogin ? <BottomNaviagtion /> : <StackNaviagtion />}

      </NavigationContainer>
    </Provider>
  );
};

// //make this component available to the app
export default App;
