//import liraries
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {horizontalScale} from '../../../../testComponent/metrices';
import {Color} from '../../style/style';

// create a component
const SmallPrimaryButton = ({onPress, buttonTitle, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.buttonStyle, style]}>
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
    height: 38,
    width: 154,
    marginHorizontal: horizontalScale(23),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 50,
    shadowOpacity: 0.5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: Color.primaryColor,
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: Color.white,
    fontFamily: 'Poppins-SemiBold',
  },
  pressed: {
    opacity: 0.75,
  },
});

//make this component available to the app
export default SmallPrimaryButton;
