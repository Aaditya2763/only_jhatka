import React from 'react';
import {View, Text,Image, StyleSheet, Pressable} from 'react-native';
import {Color} from '../../style/style';

const customiseItemButton = ({title, onPress, style,source}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.buttonStyle, style]}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <Image style={styles.arrow} source={source} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.dark,
    height: 52,
    width: 300,
    marginHorizontal: 25,
alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  pressed: {
    opacity: 0.5,
  },
  arrow: {
    width:20,
    height:8,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
resizeMode:"contain",
    marginLeft: 10,
    marginTop: -2,
  },
});
export default customiseItemButton;
