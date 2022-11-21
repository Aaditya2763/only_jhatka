import React from 'react';
import {View, Image, StatusBar, StyleSheet, PixelRatio} from 'react-native';
import Logo from '../assets/images/splashImage.png';
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Image source={Logo} style={StyleSheet.logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  Logo: {
    height: PixelRatio.getPixelSizeForLayoutSize(200),
    width: PixelRatio.getPixelSizeForLayoutSize(200),
    backgroundColor: 'white',
  },
});
