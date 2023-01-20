//import libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../../../testComponent/metrices';
import { Color } from '../../style/style';

// create a component
const Title = ({title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: verticalScale(20),
    textAlign: 'center',
    color:"black",
    opacity: 0.5,
    fontFamily: 'Poppins-Medium',
  },
  container: {
    width: horizontalScale(255),
    height: verticalScale(54),
  },
});

//make this component available to the app
export default Title;
