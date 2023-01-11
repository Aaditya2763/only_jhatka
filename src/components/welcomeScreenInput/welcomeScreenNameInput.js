import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Color} from '../../constants/style/style';
// import {Icon} from 'react-native-vector-icons/FontAwesome';

const WelcomeScreenNameInput = ({source, title, placeholder, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={source} style={[styles.image]} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={'grey'}
        underlineColorAndroid={'transparent'}
        textAlign="left">
        {title}
      </TextInput>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',

    width: 300,
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
  input: {
    width: 200,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    opacity: 1,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: Color.dark,

    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 20,
    height: 25,
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 2,
    resizeMode: 'contain',
    fontWeight: '400',
    // fontFamily:'Poppins-Medium',
    borderColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'white',
    paddingLeft: 5,
    paddingVertical: 0,
    paddingHorizontal: 0,

    marginVertical: 10,
    elevation: 10,
  },
});

//make this component available to the app
export default WelcomeScreenNameInput;
