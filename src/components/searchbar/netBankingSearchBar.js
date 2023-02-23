import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';

const NetBAnkingSearchBar = ({style, placeholder}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/icons/searchicon.png')}
        style={styles.img}
      />
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor="grey"
       style={styles.inputBox}
       />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 318,
    height: 48,
    borderwidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    // borderwidth: 1,
    marginVertical: 0,
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  inputBox: {
    width: 200,
    height: 25,
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: '400',
    padding: 5,
    color:"black",
    marginRight: 70,
    borderLeftColor: 'black',
    borderLeftWidth: 2,
  },

  img: {
    width: 25,
    height: 25,
    padding: 10,
    marginLeft: 15,
  },
});

export default NetBAnkingSearchBar;
