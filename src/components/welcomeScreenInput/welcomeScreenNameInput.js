import React, {useState} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {Color} from '../../constants/style/style';
// import {Icon} from 'react-native-vector-icons/FontAwesome';

const WelcomeScreenNameInput = ({source, title, placeholder, style}) => {
  const [textInputName, setTextInputName] = useState('');
  const checkInput = () => {
    if (textInputName.trim() === '') {
      alert('Please Enter valid Name');
      return;
    }
  };

  return (
    <View style={[styles.container, style]}>
      
        <Image source={source} style={[styles.image]} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onPress={checkInput()}
          onChangeText={value => setTextInputName(value)}>
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
    width: 250,
    height: 100,
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
