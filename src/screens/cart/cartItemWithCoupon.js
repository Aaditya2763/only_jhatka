import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
//importing components
import CustomiseItemButton from '../../constants/ui/button/customiseItemButton';
import Title from '../../constants/ui/title/title';
import Arrowdown from '../../assets/icons/Arrowdown.png';
//importing images

import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import { useSelector } from 'react-redux';
import CartitemDetails from '../../components/cart/CartItemDetails';
import CouponButton from '../../constants/ui/button/couponButton';
import BillSlip from '../../components/BillSlip';
import CouponCard from '../../components/coupon/couponCard';
import BottomProceedBtnWithPrice from '../../constants/ui/button/BottomProceedBtnWIthPrice';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CartItemWithCoupon = () => {
  const navigation = useNavigation(); 
  const Stack = createNativeStackNavigator();
  const Count = useSelector(state => state.counter.count);
 
  return (
    <SafeAreaView style={styles.container}>
      <CartitemDetails />
      <Text style={styles.OfferTitle}> Offers</Text>
      <CouponCard />
      <Text style={styles.BillingTitle}> Billings</Text>
      <BillSlip />
      <CustomiseItemButton
        source={Arrowdown}
        title={'Pick your slot'}
        style={styles.Custombtn}
        onPress={() => navigation.navigate('ChooseDeliveryScreen')} 
      />
      <BottomProceedBtnWithPrice
        title={'Rs. '+`${Count*550+100}`}
        buttontitle={'Proceed to pay'}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.white,
    elevation: 1,

    borderRadius: 10,
  },

  OfferTitle: {
    width: 200,
    height: 30,
    fontSize: 20,
    lineHeight: 27,
    color: 'black',
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight: '650',
    marginLeft: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  BillingTitle: {
    width: 200,
    height: 30,
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'Poppins',
    fontWeight: '680',
    color: 'black',
    textAlign: 'left',
    marginLeft: 12,
    marginTop: 5,
    alignItems: 'center',
  },
  Custombtn: {
    alignSelf: 'center',
    marginLeft: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#2D2D2D',
  },
});

export default CartItemWithCoupon;
