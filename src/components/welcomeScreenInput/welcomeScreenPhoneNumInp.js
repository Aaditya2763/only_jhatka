import React,{useState} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Color} from '../../constants/style/style';

const WelcomeScreenPhoneNumInp = ({source, placeholder, style}) => {
const WelcomeScreenPhoneNumInp = ({source, placeholder,style}) => {
  const [textInputphoneNo, setTextInputphoneNo] = useState('');
  const checkInput=()=>{
    if (textInputphoneNo.trim()===""){
      alert('Please Enter valid Name');
     return;
    }
  }
  return (
    <View style={[styles.container, style]}>
      <Image source={source} style={styles.image} />
      <TextInput
        placeholder={placeholder}
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
        placeholderTextColor={Color.dark}
        onChangeText={
          (value) => setTextInputphoneNo(value)
        }
        onPress={
          checkInput()
        }
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    // borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 10,
  },
  input: {
    width: 200,
    paddingLeft: 10,
    fontSize: 16,
    color: Color.dark,
    opacity: 0.4,
    fontWeight: '500',

    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  image: {
    width: 20,
    height: 25,
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
    aspectRatio: 1,
  },
});

//make this component available to the app
export default WelcomeScreenPhoneNumInp;
