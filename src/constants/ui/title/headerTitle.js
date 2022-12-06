//import libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../style/style';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../../../testComponent/metrices';

// create a component
const HeaderTitle = ({title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  title: {
    color: Color.dark,
    fontSize: moderateScale(28),
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  container: {
    width: horizontalScale(217),
    height: verticalScale(74),
  },
});

//make this component available to the app
export default HeaderTitle;
