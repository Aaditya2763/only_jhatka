import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../constants/style/style';

import Source from '../../../assets/icons/BankIcons/walletIcon.png';
import PrimaryButton from './primaryButton';
import SwitchButton from './switchButton';

const JhatkaWalletWithBtn = ({onPress, source, title, price, style}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.Card, style]}>
        <View style={styles.icon}>
          <Image source={Source} style={styles.img} />
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.Btn1}>Jhatka wallet</Text>
          </Pressable>
        </View>
        <View style={styles.Buttons}>
          <Text style={styles.price}>Rs.{price}</Text>

          <SwitchButton />
        </View>
      </View>
      <PrimaryButton buttonTitle={'place order'} style={styles.orderBtn} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 110,
    alignSelf: 'center',
    flexDirection: 'column',

    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
    // marginVertical: 10,
  },
  Card: {
    width: 320,
    height: 50,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  Buttons: {
    width: 120,
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: 200,
    height: 40,
    flexDirection: 'row',
    borderRadius: 5,

    color: 'grey',
  },

  img: {
    width: 35,
    height: 35,

    resizeMode: 'cover',
    marginTop: 0,
    marginLeft: 5,
  },
  Btn1: {
    fontFamily: 'Poppins-Medium',

    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
    marginTop: 8,
  },
  price: {
    fontFamily: 'Poppins-Medium',

    fontWeight: '500',
    fontSize: 14,
    marginLeft: 5,
    marginTop: 3,
    paddingRight: 5,
    color: 'black',
  },
  orderBtn: {
    width: 240,
    height: 40,
    fontSize: 14,
  },

  pressed: {
    opacity: 0.75,
  },
});
export default JhatkaWalletWithBtn;
