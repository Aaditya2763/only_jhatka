
import React from "react";
import { View,Text, StyleSheet, ScrollView, Image, Dimensions, FlatList } from "react-native";
import { Color } from "../../constants/style/style";
'native-base';


const {width} = Dimensions.get('window');
const height = (width * 100) / 60;
const data = [
  {uri: require('../../assets/images/carouselimg.png')},
  {uri: require('../../assets/images/carouselimg.png')},
  {uri: require('../../assets/images/carouselimg.png')},
  {uri: require('../../assets/images/carouselimg.png')},
  {uri: require('../../assets/images/carouselimg.png')},
  {uri: require('../../assets/images/carouselimg.png')},
];


const Carousel = () => {
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Image source={item.uri} style={styles.img} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 230,
  },
  img: {
    width: 320,
    height: 170,
    padding: 5,
    resizeMode: 'contain',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Carousel;


const Carousel = ({style}) =>{
    
    return (
        <FlatList
          horizontal={true}
          data={data}
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

