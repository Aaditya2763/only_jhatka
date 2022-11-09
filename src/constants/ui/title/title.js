//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Title = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: 'black',
    opacity: 0.5,
  },
  container: {
    width: 255,
    height: 54,
    marginTop: 9,
    marginBottom: 18,
  },
});

//make this component available to the app
export default Title;
