//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, Pressable} from 'react-native';
import {Color} from '../../constants/style/style';
import Chikcen from '../../assets/images/chicken.png';
import Title from '../../constants/ui/title/title';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

// create a component
const {height, width} = Dimensions.get('screen');

const ProductItem = ({image, title, weight, point, price, style}) => {
  const navigation=useNavigation();
  return (
    <Pressable
    style={({pressed}) => pressed && styles.pressed}
    onPress={() => navigation.navigate('AddItems')}>
    <View style={[styles.container, style]} 
    onPress={() => navigation.navigate('Items')}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={image}   onPress={() => navigation.navigate('Items')} />
      </View>
      <Title title={title} style={styles.titleStyle} />
      <View style={styles.weightDescriptionContainer}>
        <Text style={styles.weightDescription}>{weight} gms</Text>
        <Text style={styles.weightDescription}>{point}⭐</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Rs.{price}</Text>
      </View>
    </View></Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color.white,
    // height: 190,
    height: responsiveScreenHeight(25.17),
    // height: height - 580,
    // width: 150,
    width: responsiveScreenWidth(40),
    borderRadius: 20,
    elevation: 5,
    margin: 15,
    marginTop:-30,
    marginBottom:40,
  },
  titleStyle: {
    color: Color.dark,
    fontSize: 14,
 
    fontWeight: '600',
    marginRight: 14,
  },
  imageContainer: {
    margin: 28,
  },
  imageStyle: {
    height: 70,
    width: 112,
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
export default ProductItem;
