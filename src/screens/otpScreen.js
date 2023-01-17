//import libraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import VectorImages from '../components/VectorImages/vectorImages';
import {Color} from '../constants/style/style';
import PrimaryButton from '../constants/ui/button/primaryButton';
import HeaderTitle from '../constants/ui/title/headerTitle';

import OtpVerification from '../components/OtpVerification/otpVerification';

// create a component
const OtpScreen = () => {
  let otp = 1234;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <VectorImages
          source={require('../assets/images/verifiOtpImage.png')}
          style={styles.image}
        />

        <View>
          <HeaderTitle title={'Verify OTP'} style={styles.headerStyle} />
          <Text style={styles.title}>
            An OTP has been sent to the mobile number
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <OtpVerification style={styles.otpBox} otp={otp}   />
          {/* <Text style={styles.resendButton}>Resend OTP</Text> */}
        </View>
         {/* <PrimaryButton buttonTitle={'Verify OTP'}  /> */}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  inputContainer: {
    justifyContent: 'center',
    height: 170,
    alignItems: 'center',
    marginTop:35,
  },
  input: {
    width: 319,
    height: 48,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 2,
    fontWeight: '400',
    fontFamily: 'Poppins-Medium',
    borderColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,

    marginVertical: 10,
    elevation: 10,
  },
  image: {
    marginTop: 10,
    width: 238,
    height: 310,
  },
  headerStyle: {
    marginTop: 20,
    marginLeft: -30,
  },
  title: {
    marginTop: -15,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 8,
    lineHeight: 21,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
  otpBox: {
    marginTop: -20,
  },
  resendButton: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 21,
    right: -100,
    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Poppins-Normal',
  },
});

//make this component available to the app
export default OtpScreen;
