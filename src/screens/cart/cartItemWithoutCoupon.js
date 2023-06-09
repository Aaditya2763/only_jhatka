import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
//importing components
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import CustomiseItemButton from '../../constants/ui/button/customiseItemButton';
import Title from '../../constants/ui/title/title';
import ArrowRight from '../../assets/icons/ArrowRight.png';
//importing images
import { useSelector } from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import BottomProceedBtnWithPrice from '../../constants/ui/button/BottomProceedBtnWIthPrice';
import CartitemDetails from '../../components/cart/CartItemDetails';
import CouponButton from '../../constants/ui/button/couponButton';
import BillSlip from '../../components/BillSlip';

const CartItemWithoutCoupon = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();

  const Count = useSelector(state => state.counter.count);
  return (
    <SafeAreaView style={styles.container}>
      <CartitemDetails />
      <Text style={styles.OfferTitle}> Offers</Text>
      {/* <Title title={"Offers"} style={styles.OfferTitle} /> */}
      <CouponButton
        source={ArrowRight}
        title={'Apply Coupon'}
        
        style={styles.cpnBtn}
        onPress={() => navigation.navigate('CouponScreen')} 
      />
      {/* <Title title={"Billings"} style={styles.BillingTitle} /> */}
      <Text style={styles.BillingTitle}> Billings</Text>
      <BillSlip />
      <BottomProceedBtnWithPrice onPress={() => navigation.navigate('cartItemWithCoupon')}
        title={'Rs. '+`${Count*550+100}`}
        buttontitle={'Proceed to pay'}
        style={styles.paymentBox}
         
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
  paymentBox:{
    backgroundColor: Color.white,
    elevation: 2,

    marginTop:100,
  }
});

export default CartItemWithoutCoupon;
