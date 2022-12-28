//import liraries
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CutomizeProducts from '../../components/customizeProduct/addBottomCutomizeProduct';
import RBSheet from 'react-native-raw-bottom-sheet';

// create a component
const ShoppingCart = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>shopping</Text>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => this[RBSheet + refRBSheet].open()}
      />
      <CutomizeProducts openBottomSheet={refRBSheet} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkGrey',
  },
  text: {
    color: 'black',
  },
});

//make this component available to the app
export default ShoppingCart;
