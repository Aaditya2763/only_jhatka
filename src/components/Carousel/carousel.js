import React from 'react';
import {View, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {Color} from '../../constants/style/style';
('native-base');

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
export default Carousel;
