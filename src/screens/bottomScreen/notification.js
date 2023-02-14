//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Color} from '../../constants/style/style';
import NotificationScreen from '../notification/NotificationScreen';

// create a component
const Notification = () => {
  return (
    <SafeAreaView>
      <NotificationScreen />
    </SafeAreaView>
  );
};

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Color.white,
//   },
//   text: {
//     color: 'black',
//   },
// });

//make this component available to the app
export default Notification;
