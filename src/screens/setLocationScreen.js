//import libraries
import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import ShadowBox from '../components/setLocationComponent/shadowBox';
import VectorImages from '../components/VectorImages/vectorImages';
import {Color} from '../constants/style/style';
import PrimaryButton from '../constants/ui/button/primaryButton';
import HeaderTitle from '../constants/ui/title/headerTitle';
import Title from '../constants/ui/title/title';
import {useNavigation} from '@react-navigation/native';
import {verticalScale} from '../../testComponent/metrices';

// create a component
const SetLocationScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={styles.container}>
        <VectorImages source={require('../assets/images/vector4x.png')} />
        <ShadowBox>
          <HeaderTitle
            title={'Set Location to Proceed'}
            style={styles.hederStyle}
          />
          <Title
            title={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
            style={styles.title}
          />
          <PrimaryButton
            buttonTitle={'Set Location'}
            onPress={() => navigation.navigate('setDeleveryLoactionScreen')}
            style={styles.ButtonStyle}
          />
        </ShadowBox>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  vectorImage: {
    marginTop: verticalScale(50),
  },
  hederStyle: {
    marginTop: verticalScale(10),
    height: 80,
  },
  title: {
    marginTop: verticalScale(9),
  },
  ButtonStyle: {
    marginTop: verticalScale(18),
  },
});

//make this component available to the app
export default SetLocationScreen;
