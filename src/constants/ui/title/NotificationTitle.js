import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
//importing components

//importing images

const NotificationTitle = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets//images/backButton.png')}
        style={styles.img}
      />
      <Text style={styles.title}>{title}</Text>

      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <Text style={styles.cleartitle}>Clear All</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 330,

    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 20,
    height: 15,
    marginLeft: -10,

    alignSelf: 'center',
  },
  title: {
    width: 120,
    height: 30,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    lineHeight: 30,
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  cleartitle: {
    width: 60,
    height: 30,
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    lineHeight: 30,
    textDecorationLine: 'underline',

    alignSelf: 'center',
    fontSize: 14,
    color: '#F7A399',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default NotificationTitle;
