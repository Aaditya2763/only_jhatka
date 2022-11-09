//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../style/style';

// create a component
const HeaderTitle = ({title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    color: Color.dark,
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    // lineHeight: 132.5,
  },
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 217,
    height: 74,
  },
});

//make this component available to the app
export default HeaderTitle;
