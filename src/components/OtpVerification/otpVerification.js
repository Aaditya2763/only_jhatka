import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../../constants/ui/button/primaryButton';
const OtpVerification = ({ onSubmit, style, otp, navigation }) => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [isLogin, setIsLogin] = useState('false')
  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  // const submitBtn=useRef()

  useEffect(() => {
    pin1ref.current?.focus();
  }, []);

  let arr = [pin1, pin2, pin3, pin4];
  var input = arr.join("");

  const checkOTP = () => {
    if (input == otp) {

      alert("verified");
      setIsLogin(true);
      
    }
    else {
      alert("Please enter valid input failed");
    }
    
    
  }

  return (
    <View>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          keyboardType="numeric"
          maxLength={1}
          ref={pin1ref}
          onChangeText={pin1 => {
            setPin1(pin1);
            if (pin1 != '') {
              pin2ref.current.focus();
            }
          }}
          value={pin1}
          style={styles.TextInput}
        />

        <TextInput
          keyboardType="numeric"
          maxLength={1}
          ref={pin2ref}
          onChangeText={pin2 => {
            setPin2(pin2);
            if (pin2 != '') {
              pin3ref.current.focus();
            } else {
              pin1ref.current.focus();
            }
          }}
          value={pin2}
          style={styles.TextInput}
        />

        <TextInput
          keyboardType="numeric"
          maxLength={1}
          ref={pin3ref}
          onChangeText={pin3 => {
            setPin3(pin3);
            if (pin3 != '') {
              pin4ref.current.focus();
            } else {
              pin2ref.current.focus();
            }
          }}
          value={pin3}
          style={styles.TextInput}
        />

        <TextInput
          keyboardType="numeric"
          maxLength={1}

          ref={pin4ref}
          onChangeText={pin4 => {
            setPin4(pin4);
            if (pin4 != '') {
              pin4ref.current.focus();
            }
            else {
              pin3ref.current.focus();
            }
          }}
          value={pin4}
          style={styles.TextInput}



        />
      </View>
      <Text style={styles.resendButton}>Resend OTP</Text>
      <PrimaryButton buttonTitle={'Verify OTP'} style={styles.submitButton} onPress={checkOTP} />
    </View>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 264,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  resendButton: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 21,
    textAlign: 'right',
    marginRight: 60,

    textDecorationLine: 'underline',
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Poppins-Normal',
  },
  TextInput: {
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center', //
    color: '#2D2D2D',
  },
  submitButton: {
    marginTop: 50,
  }
});

export default OtpVerification;
