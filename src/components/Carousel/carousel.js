<<<<<<< HEAD
import React from "react";
import { View,Text, StyleSheet, ScrollView, Image, Dimensions, FlatList } from "react-native";
import { Color } from "../../constants/style/style";
'native-base';
=======
import React from 'react';
import {View, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {Color} from '../../constants/style/style';
('native-base');
>>>>>>> fdc251ce8b0507b9a6e4efe67424b1bb63fff78c

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

<<<<<<< HEAD

const Carousel = () =>{
    
    return (
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => (
            <View style={styles.container}>
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
  height:230,
  
 },
    img: {
       width:320,
        height: 170,
        padding:5,
        resizeMode: "contain",
        borderRadius: 10,
    marginLeft:10,
    marginRight:10,
   

    }

})
=======
const Carousel = () =>
  data.map((images, index) => (
    <View>
      <ScrollView>
        {/* <Image source={images.uri}
                    key={index}
                    style={styles.img} /> */}
      </ScrollView>
    </View>
  ));

const styles = StyleSheet.create({
  img: {
    width: '85%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
    margin: 10,
  },
});
>>>>>>> fdc251ce8b0507b9a6e4efe67424b1bb63fff78c
export default Carousel;
