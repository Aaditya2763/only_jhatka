import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
const BillSlip = () => {
  const Count = useSelector(state => state.counter.count);
  return (
    <View style={styles.container}>
      <View style={styles.subTotal}>
        <Text style={styles.charges}>Subtotal</Text>
        <Text style={styles.charges}>{Count * 550}</Text>
      </View>
      <View style={styles.subTotal}>
        <Text style={styles.charges}>Takeaway Charges</Text>
        <Text style={styles.charges}>Rs. 100</Text>
      </View>
      <Text style={styles.dash}>
        - - - - - - - - - - - - - - - -     {'         '}
      </Text>
      <View style={styles.subTotal}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>Rs.{Count * 550 + 100}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  subTotal: {
    width: 320,
    height: 30,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  charges: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: 'black',
  },
  dash: {
    fontFamily: 'Poppins',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 24,
    color: 'black',
  },
  total: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 27,
    color: 'black',
  },
});

export default BillSlip;