import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../constants/style/style';

const WalletCard = ({onPress, source, title, desc, style}) => {
  return (
    <View style={[styles.Card, style]}>
      <View style={styles.icon}>
        <Pressable
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressed}>
          <Image source={source} style={styles.img} />
        </Pressable>
      </View>
      <View style={styles.Buttons}>
        <View>
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.Btn1}>{title}</Text>
          </Pressable>
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.Btn2}>{desc}</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}>
            <Text style={styles.link}>link</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  Card: {
    width: 315,
    height: 70,
    flexDirection: 'row',

    alignSelf: 'center',
    alignItems: 'center',
    // marginVertical: 5,

    paddingLeft: 10,

    borderRadius: 10,
    marginVertical: 2,
  },
  Buttons: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,

    borderRadius: 5,
    marginLeft: 10,
    borderWidth: 1.9,
  },
  img: {
    width: 30,
    height: 30,
    borderWidth: 1,
    resizeMode: 'center',
    marginTop: 5,
    alignSelf: 'center',
  },
  Btn1: {
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 20,
    color: 'black',
    lineHeight: 27,
  },
  Btn2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    marginLeft: 20,
    opacity: 0.5,
    fontWeight: '600',

    color: Color.dark,
    lineHeight: 21,
  },
  link: {
    color: 'black',
    textDecorationLine: 'underline',
    marginRight: 20,
    fontSize: 14,
    marginTop: -2,
  },

  pressed: {
    opacity: 0.75,
  },
});
export default WalletCard;
