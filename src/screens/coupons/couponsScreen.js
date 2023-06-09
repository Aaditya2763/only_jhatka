import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
//importing components
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import WelcomeScreenNameInput from '../../components/welcomeScreenInput/welcomeScreenNameInput';
import Title from '../../constants/ui/title/title';
import CouponCard from '../../components/coupon/couponCard';
//importing images
import Check from '../../assets/icons/check.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const CouponScreen = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <TitleWithBackBtn title={'Apply coupon'} /> */}
      <WelcomeScreenNameInput
        placeholder={'Enter Coupon Code'}
        source={Check}
        style={styles.inputBox}
      />
      <Title title={'Offers'} style={styles.title} />
      <ScrollView style={styles.scrollContainer}>
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
        <CouponCard onPress={() => navigation.navigate('CartItemWithCoupon')} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.white,
    elevation: 1,
    // borderWidth:1,
    borderRadius: 10,
  },
  scrollContainer: {
    height: '100%',
    backgroundColor: Color.white,
  },
  inputBox: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: 315,
    height: 48,
  },
  title: {
    width: '100%',
    height: 30,
    color: 'black',
    opacity: 1,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 10,

    fontFamily: 'Poppins',
  },
});

export default CouponScreen;
