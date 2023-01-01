import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../constants/style/style';
import PrimaryButton from '../../constants/ui/button/primaryButton';
import Title from '../../constants/ui/title/title';

const NotificationCard = ({onPress}) => {
  return (
    <View style={styles.coupon}>
      <View style={styles.Buttons}>
        <Pressable
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressed}>
          <Text style={styles.codeBtn}>Notification</Text>
        </Pressable>
        <Pressable
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressed}>
          <Text style={styles.removeBtn}>Clear</Text>
        </Pressable>
      </View>

      <Text style={styles.desc}>
        Lorem ipsom dolor emet Lorem ipsom dolor emet Lorem ipsom dolor emet...
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  coupon: {
    width: 318,
    height: 93,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  Buttons: {
    flexDirection: 'row',
    width: 290,
    height: 30,
    marginTop: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  codeBtn: {
    width: 80,
    height: 25,

    color: 'black',
    textAlign: 'center',
    paddingTop: 3,
    opacity: 0.5,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 15,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  removeBtn: {
    marginRight: 10,
    color: '#F7A399',
    fontFamily: 'Poppins',
    borderBottomColor: '#F7A399',
    borderBottomWidth: 1,
  },
  offer: {
    width: 170,
    height: 21,
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: 'black',
    opacity: 0.8,

    marginLeft: 20,
  },
  desc: {
    width: 260,
    height: 50,
    marginTop: -3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginLeft: 12,
    opacity: 0.5,

    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  couponDetails: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: 'black',
    opacity: 0.4,
  },
  more: {
    fontSize: 12,
    lineHeight: 18,
    marginLeft: -0,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#00BAF2',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default NotificationCard;
