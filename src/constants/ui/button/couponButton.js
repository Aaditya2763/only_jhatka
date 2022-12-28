import React from 'react';
import {StyleSheet, View, Text,Image,Pressable, TextInput} from 'react-native';

const CouponButton = ({source, title, placeholder,onPress}) => {
  return (
    <Pressable
    onPress={onPress}
    style={({pressed}) => pressed && styles.pressed}>
    <View style={styles.container}>
        <Text placeholder={placeholder} style={styles.input}>
        {title}
      </Text>
      <Image source={source} style={styles.image} />
      
    </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center',
    width: 340,
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

    marginVertical: 15,
    elevation: 10,
  },
  pressed: {
    opacity: 0.9,
  },
  input: {
    width: 200,
    paddingLeft: 10,
    alignSelf:'center',
    fontSize: 16,
    
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 12,
    height: 5,
    marginRight:30,
   alignSelf:'center',
   aspectRatio:0.6,
    // fontSize: 14,
    // borderRadius: 10,
    // borderWidth: 2,
    // fontWeight: '400',
    // fontFamily:'Poppins-Medium',
    // borderColor: 'white',
    // shadowColor: 'rgba(0, 0, 0, 0.6)',
    // backgroundColor: 'white',
    // paddingLeft: 5,
    // paddingVertical: 0,
    // paddingHorizontal: 0,

    // marginVertical: 10,
    // elevation: 10,
  },
});

//make this component available to the app
export default CouponButton;
