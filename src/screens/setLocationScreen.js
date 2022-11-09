//import liraries
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Box from '../components/setLocationComponent/Box';
import VectorImages from '../components/VectorImages/vectorImges';
import {Color} from '../constants/style/style';
import PrimaryButton from '../constants/ui/button/primaryButton';
import HeaderTitle from '../constants/ui/title/headerTitile';
import Title from '../constants/ui/title/title';

// create a component
const SetLocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <VectorImages source={require('../../assets/Images/vector4x.png')} />
        <Box>
          <HeaderTitle
            title={'Set Location to Proceed'}
            style={{marginTop: 49}}
          />
          <Title title={'Lorem ipsum dolor sit amet, consectetur adipiscing'} />
          <PrimaryButton buttonTitle={'Set Location'} />
        </Box>
      </View>
    </SafeAreaView>
  );
};

// define your styless
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  vectorImage: {
    marginTop: 50,
  },
});

//make this component available to the app
export default SetLocationScreen;
