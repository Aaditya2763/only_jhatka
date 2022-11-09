//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../constants/style/style';

// create a component
const VectorImages = ({source, style}) => {
  return <Image style={[styles.imageStyle, style]} source={source} />;
};

// define your styles
const styles = StyleSheet.create({
  imageStyle: {
    height: 324,
    width: 324,
    marginTop: 102,
    marginHorizontal: 25,
  },
});

//make this component available to the app
export default VectorImages;
