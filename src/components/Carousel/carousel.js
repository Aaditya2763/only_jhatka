import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {Color} from '../../constants/style/style';
('native-base');

const {width} = Dimensions.get('window');
const height = (width * 100) / 60;


//redux components
import { useSelector } from 'react-redux';
import { allCarouselImg } from '../../redux/carousel/carouselSlice';
import { allproducts } from "../../redux/products/productsSlice";



const Carousel = ({style}) =>{
  const images =useSelector(allproducts);
  // console.log(images)
    return (
        <FlatList
          horizontal={true}
          data={images}
          style={style}
          renderItem={({item}) => (
            <View style={[styles.container]}>
              <Image
              source={item.uri}
              style={styles.img}
              />
             
            </View>
  
    
          )}
    
        />
       
           
      );
}
   
   

const styles = StyleSheet.create({
 container:{
  height:200,
  
 },
    img: {
       width:320,
        height: 150,
        padding:5,
        resizeMode: "contain",
        borderRadius: 10,
    marginLeft:10,
    marginRight:10,
   

    }

})
export default Carousel;

