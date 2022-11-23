import React from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';
import {Color} from '../../style/style';

const IconButton = ({onPress, source, style}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <Image source={source} style={[styles.iconStyle, style]} />
        </View>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  iconStyle: {
    width: 10,
    height: 16,
    backgroundColor: Color.white,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 3},
    // shadowColor: Color.dark,
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
  },
  pressed: {
    opacity: 0.9,
  },
});
