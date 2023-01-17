/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';
import Item from './src/screens/itempages/item';
import ChooseDeliveryScreen from './src/screens/deliveryScreen/chooseDeliveryScreen';
import AddUpiScreen from './src/screens/Upi/addUpiScreen';
import AddItem from './src/screens/itempages/addItem';
import AddCard from './src/screens/card/AddCard';
import Home from './src/screens/bottomScreen/home';
import DashboardScreen from './src/screens/dashboardScreen';
import CartItemWithoutCoupon from './src/screens/cart/cartItemWithoutCoupon';
import CartItemWithCoupon from './src/screens/cart/cartItemWithCoupon';

import PaymentOption from './src/screens/payments/paymentOption';
import Wallet from './src/screens/payments/wallet';
import NetBanking from './src/screens/payments/netBanking';
import NotificationScreen from './src/screens/notification/NotificationScreen';
import Profile from './src/screens/profile/profile';
import EditProfile from './src/screens/profile/editProfile';
import addAddress from './src/screens/addAddress/addAddress';
import VoucherCard from './src/components/cards/voucherCard';
import JhatkaWallet from './src/components/cards/jhatkaWallet';
import JhatkaWalletWithBtn from './src/constants/ui/button/jhatkaWalletWithPrimaryBtn';
import NetBankingWithJhatkaWallet from './src/screens/payments/netbankingWithjhatkawallet';
import WalletWithJhatkaWallet from './src/screens/payments/walletWithJhatkaWallet';
import PaymentOptionWithJhatkaWallet from './src/screens/payments/paymentOptionWithjhatkaWallet';
import PaymentOptionWithJhatkaWalletAndPrimaryBtn from './src/screens/payments/paymentOptionWithjhatkaWallet';
import addVoucher from './src/screens/voucher/addVoucher';
import addMoney from './src/screens/voucher/addMoney';
import AddAddress from './src/screens/addAddress/addAddress';
import CouponCard from './src/components/coupon/couponCard';

import WelcomeScreen from './src/screens/welcomeScreen';

import SetLocationScreen from './src/screens/setLocationScreen';
import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
import BottomNavBar from './src/components/Bottom Navbar/BottonNavBar';
import SetDelveryLoactionScreen from './src/screens/setDeliveryLocationScreen';
import OtpScreen from './src/screens/otpScreen';
import AddaddressMapSceen from './src/screens/mapsScreen/addMapScreens';

AppRegistry.registerComponent(appName, () =>App );

