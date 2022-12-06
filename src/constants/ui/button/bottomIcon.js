//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// icons image
// create a component
const BottomIocons = ({source}) => {
  return (
    <View>
      <Image style={styles.icons} source={source} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  icons: {
    height: 20,
    width: 20,
  },
});

//make this component available to the app
export default BottomIocons;
