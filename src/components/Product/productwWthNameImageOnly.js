//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../constants/style/style';
import Chikcen from '../../assets/images/chicken.png';
import Title from '../../constants/ui/title/title';

// create a component
const ProductWithNameImageOnly = ({image, title,  style}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image} />
      </View>
      <Title title={title} style={styles.titleStyle} />
   
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.white,
    height: 190,
    width: 150,
    borderRadius: 20,
    elevation: 5,
    margin: 15,
  },
  titleStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: '600',
   
  },
  imageContainer: {
    margin: 18,
  },
  imageStyle: {
    height: 60,
    width: 100,
  },
  weightDescriptionContainer: {
    flexDirection: 'row',
  },
  weightDescription: {
    color: Color.dark,
    marginHorizontal: 15,
    marginTop: -30,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
  },
  textArea: {
    alignItems: 'flex-start',
  },
  price: {
    color: Color.primaryColor,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  priceContainer: {
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});

//make this component available to the app
export default ProductWithNameImageOnly;
