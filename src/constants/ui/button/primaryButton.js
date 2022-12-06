//import libraries
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Color} from '../../style/style';

// create a component
const PrimaryButton = ({buttonTitle, onPress,style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.buttonStyle,style]}>
        <Text style={styles.buttonTitle}>{buttonTitle}</Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonStyle: {
  
    backgroundColor: Color.primaryColor,
    borderRadius: 34.49,
    height: 52,
    width: 264,
    marginHorizontal: 60,
    marginBottom: 98,
    justifyContent: 'center',
   alignItems:'center',
 
  alignItems:'center',
    elevation: 50,
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: Color.primaryColor,
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: Color.white,
    fontFamily: 'Poppins-SemiBold',
  },
  pressed: {
    opacity: 0.75,
  },
});

//make this component available to the app
export default PrimaryButton;
