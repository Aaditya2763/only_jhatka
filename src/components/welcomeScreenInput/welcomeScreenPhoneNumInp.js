import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Color} from '../../constants/style/style';

const WelcomeScreenPhoneNumInp = ({source, placeholder, title,style}) => {
  const [textInputphoneNo, setTextInputphoneNo] = useState('');
  
  const checkInput = () => {
    if (textInputphoneNo =='' ||textInputphoneNo.length<10) {
      alert('Please Enter valid Number');
      return;
    }
  };
  return (
    <View style={[styles.container, style]}>
       <Image source={source} style={[styles.image]} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onEndEditing={checkInput}
          onChangeText={value => setTextInputphoneNo(value)}>
      
          {title}
        </TextInput>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
   justifyContent: 'flex-start',
    alignSelf: 'center',

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
     paddingLeft: 5,
    paddingVertical: 0,
    paddingHorizontal: 0,

    marginVertical: 10,
    elevation: 10,
  },
  input: {
    width: 250,
    height: 100,
    paddingLeft: 10,
    fontSize: 16,
   
    fontWeight: '500',
    opacity: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: Color.dark,
    textAlign:'left',

    
    fontFamily: 'Poppins-Medium',
  },
  image: {
    width: 20,
    height: 25,
   
    borderRadius: 10,
    borderWidth: 2,
    fontWeight: '400',
    fontFamily: 'Poppins-Medium',
    borderColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'white',
    paddingLeft:0,
    paddingVertical: 0,
    paddingHorizontal: 0,

   marginVertical: 10,
    elevation: 10,
    aspectRatio: 1,
  },
});

//make this component available to the app
export default WelcomeScreenPhoneNumInp;
