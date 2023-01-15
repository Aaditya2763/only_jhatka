import React from 'react';
import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';

const DeliveryFromTo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sourceBox}>
        <Image
          source={require('../../assets/icons/deliveryIcons/source.png')}
          style={styles.img}
        />
        <Text style={{color: 'black', fontSize: 16}}> From | </Text>
        <TextInput placeholder={'Delivery in 35 min'} style={styles.input} />
      </View>
      <Image
        source={require('../../assets/icons/deliveryIcons/Line.png')}
        style={styles.lineImg}
      />
      <View style={styles.sourceBox}>
        <Image
          source={require('../../assets/icons/deliveryIcons/destination.png')}
          style={styles.img}
        />
        <Text style={{color: 'black', fontSize: 16}}>{' To |'}</Text>
        <TextInput
          placeholder={'Lorem Ipsom dolor amet....'}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 10,
    marginVertical: 5,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
  },
  img: {
    width: 50,
    resizeMode: 'contain',
    height: 25,
  },
  lineImg: {
    width: 50,
    resizeMode: 'contain',
    height: 25,
    marginTop: -10,
    marginBottom: -10,
  },
  sourceBox: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DestinationBox: {
    width: 300,
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: 350,
    height: 42,
    opecity: 0.5,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 15,
    lineHeight: 16,
  },
  input: {
    width: 200,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default DeliveryFromTo;
