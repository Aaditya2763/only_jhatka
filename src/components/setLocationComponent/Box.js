//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Color} from '../../constants/style/style';

// create a component
const degToRad = deg => (deg * Math.PI) / 180;
// const radToDeg = rad => (rad * 180) / Math.PI;

const width = Dimensions.get('window').width;
const screenRadius = width / 2;

const theta = degToRad(30);

const horizontalAxisLength =
  (screenRadius / Math.SQRT2) *
  Math.sqrt(1 + Math.sqrt(1 + 4 / Math.tan(theta) ** 2));
const Box = ({children}) => {
  return <View style={styles.ovalSection}>{children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  ovalSection: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Color.white,
    borderTopLeftRadius: horizontalAxisLength + screenRadius,
    borderTopRightRadius: horizontalAxisLength + screenRadius,
    width: horizontalAxisLength * 3.5,
    minHeight: screenRadius * 3,
    height: 354.5,
    elevation: 20,
    shadowOffset: {height: 0, width: 10},
    shadowColor: Color.dark,
    shadowOpacity: 0.1,
  },
  shadow: {
    flex: 1,
    elevation: 20,
    shadowOffset: {height: 0, width: 10},
    shadowColor: Color.dark,
    shadowOpacity: 0.1,
  },
});

//make this component available to the app
export default Box;
