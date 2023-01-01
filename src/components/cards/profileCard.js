import React from 'react';
import {View, StyleSheet, Pressable, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Color} from '../../constants/style/style';

import editIcon from '../../assets/icons/profileIcon/editicon.png';
const ProfileCard = ({onPress, source, title, desc, style, icon}) => {
  return (
    <View style={[styles.Card]}>
      <View style={[styles.icon, style]}>
        <Pressable
          onPress={onPress}
          style={({pressed}) => pressed && styles.pressed}>
          <Image source={source} style={styles.img} />
        </Pressable>
      </View>
      <View style={styles.Buttons}>
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
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <Image source={editIcon} style={styles.img2} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  Card: {
    width: 315,
    height: 90,
    flexDirection: 'row',

    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  Buttons: {
    width: 250,
    height: 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 1.9,
    borderColor: '#2D2D2D',
  },
  img: {
    width: 40,
    height: 40,
    marginLeft: 8,
    marginTop: 5,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  img2: {
    width: 30,
    height: 30,
    right: 50,
    resizeMode: 'contain',
  },
  plus: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
    marginTop: 8,
    opacity: 0.9,
    fontWeight: '600',
  },

  Btn1: {
    fontFamily: 'Poppins-Medium',
    marginTop: -5,
    fontWeight: '500',
    fontSize: 18,
    marginLeft: 20,
    color: 'black',
    lineHeight: 27,
  },
  Btn2: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    marginLeft: 20,
    opacity: 0.5,
    fontWeight: '600',

    color: Color.dark,
    lineHeight: 21,
  },

  pressed: {
    opacity: 0.75,
  },
});
export default ProfileCard;
