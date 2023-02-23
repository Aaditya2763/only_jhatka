import React from 'react';
import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';
//importing components
import HeaderTitle from '../../constants/ui/title/headerTitle';
import backButton from '../../assets/images/backButton.png';
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import {Color} from '../../constants/style/style';
import Title from '../../constants/ui/title/title';
import WelcomeScreenNameInput from '../../components/welcomeScreenInput/welcomeScreenNameInput';
//importing images
import Check from '../../assets/icons/check.png';
import IconButton from '../../constants/ui/button/iconButton';

const AddUpiScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/*   <TitleWithBackBtn title={'Apply UPI ID'} /> */}
      <Text style={styles.Desc}>
        Enter your verified UPI ID to pay and proceed to order your items
      </Text>
      <WelcomeScreenNameInput
        placeholder={'Enter UPI ID'}
        source={Check}
        style={styles.inputBox}
      />
      <HeaderTitle title={'Suggetions'} style={styles.heading} />
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/gpay.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/images/phonepe.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/images/paytm.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    height: '100%',
  },
  Desc: {
    width: 350,
    height: 42,
    opecity: 0.5,
    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 15,
    lineHeight: 16,
    color: Color.dark,
  },
  inputBox: {
    width: 350,
    height: 48,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
  },

  heading: {
    width: 110,
    height: 27,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
  },
  imgContainer: {
    width: 350,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  img: {
    resizeMode: 'contain',
  },
});

export default AddUpiScreen;
