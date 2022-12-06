//import liraries
import React, { cloneElement } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import {Color} from '../../style/style';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../testComponent/metrices';

// create a component

const {height, width} = Dimensions.get('window');

const SelectButton = ({onPress, CategoriesImage, CategorieTitle, style}) => {
  // relame width 360, height 754.66
  // google pixal emulator width 432 height 816
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={() => console.log(width, height)}>
      <View style={[styles.container, style]}>
        <View style={styles.internalView}>
          <Image source={CategoriesImage} style={styles.ImageStyle} />
          <Text style={styles.textStyle}>{CategorieTitle}</Text>
        </View>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: horizontalScale(94.74),
    height: verticalScale(34.49),
    marginHorizontal: horizontalScale(12),
    borderRadius: moderateScale(34.49),
    backgroundColor: Color.white,
    elevation: 5,
    shadowOffset: {height: 2, width: 3},
    shadowColor: Color.dark,
    margin: 23,
  },
  internalView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth:0.1,
   
    borderRadius:10,
  },
  ImageStyle: {
    height: verticalScale(22),
    width: horizontalScale(22),
    aspectRatio: 1,
    marginRight: horizontalScale(10.67),
    marginLeft: horizontalScale(13.22),
    marginTop: verticalScale(5),
    marginBottom: verticalScale(7.49),
  },
  textStyle: {
    color: Color.dark,
    marginRight: horizontalScale(20.14),
    fontSize: moderateScale(13),
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.9,
  },
});

//make this component available to the app
export default SelectButton;
