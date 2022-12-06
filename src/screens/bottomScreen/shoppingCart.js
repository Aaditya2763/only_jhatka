//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../constants/style/style';

// create a component
const ShoppingCart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ShoppingCart</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  text: {
    color: 'black',
  },
});

//make this component available to the app
export default ShoppingCart;
