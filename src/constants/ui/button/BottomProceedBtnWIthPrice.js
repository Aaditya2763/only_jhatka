//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderTitle from '../title/headerTitle';
import PrimaryButton from './primaryButton';

const BottomProceedBtnWithPrice = ({title, buttontitle,style}) => {
  return (
    <View style={[styles.container,style]}>
      <HeaderTitle title={title} style={styles.HeaderTitle} />
      <PrimaryButton buttonTitle={buttontitle} style={styles.Btn} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 77,
    borderTopColor: Colors.dark,
    borderTopWidth: 0.2,
    marginVertical: 10,
    alignItems: 'center',
    // alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  HeaderTitle: {
    width: 100,
    height: 36,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: 36,
    alignSelf: 'center',
    letterSpacing: 0.01,
  },
  Btn: {
    width: 154,
    height: 38,
    fontFamily: 'Poppins',
    fontSize: 16,
    marginRight: 0,
    fontWeight: '700',
    fontStyle: 'normal',
  },
});

//make this component available to the app
export default BottomProceedBtnWithPrice;
