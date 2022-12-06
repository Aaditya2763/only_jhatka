import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const OtpVerification = ({submitBtn}) => {
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const pin1ref = useRef();
  const pin2ref = useRef();
  const pin3ref = useRef();
  const pin4ref = useRef();
  // const submitBtn=useRef()

  useEffect(() => {
    pin1ref.current?.focus();
  }, []);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="numeric"
        maxLength={1}
        ref={pin1ref}
        onChangeText={pin1 => {
          setPin1(pin1);
          if (pin1 !== '') {
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
          if (pin2 !== '') {
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
          if (pin3 !== '') {
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
          if (pin4 == '') {
            pin3ref.current.focus();
          }
        }}
        value={pin4}
        style={styles.TextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 264,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

export default OtpVerification;
