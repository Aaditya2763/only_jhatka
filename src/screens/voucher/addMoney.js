import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import VoucherImage from '../../assets/images/voucherImage.png';
import VoucherCard from '../../components/cards/voucherCard';
import WelcomeScreenNameInput from '../../components/welcomeScreenInput/welcomeScreenNameInput';
import WelcomeScreenPhoneNumInp from '../../components/welcomeScreenInput/welcomeScreenPhoneNumInp';
import PrimaryButton from '../../constants/ui/button/primaryButton';
import UPICard from '../../components/cards/Upicard';
import HeaderTitle from '../../constants/ui/title/headerTitle';
import {useNavigation} from '@react-navigation/native';
const AddMoney = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        style={styles.bar}
      />
      {/* <TitleWithBackBtn title={'Add Voucher'} /> */}

      <VoucherCard
        source={VoucherImage}
        title={'Total Wallet balance'}
        desc={'Lorem ipsum dolor amet, consectetur...'}
        price={'Rs. 1000'}
      />
      <WelcomeScreenNameInput
        placeholder={'Enter Money'}
        style={styles.nameInput}
      />
      <HeaderTitle title={'UPI'} style={styles.title} />
      <UPICard
        title={'Add Upi Id'}
        desc={'Lorem ipsum doloe emet'}
        onPress={() => navigation.navigate('addUpiScreen')}
      />
      <HeaderTitle title={'Credit & Debit Cards'} style={styles.title} />
      <UPICard
        title={'Add Card Details'}
        desc={'Lorem ipsum doloe emet'}
        onPress={() => navigation.navigate('addCard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  card: {
    width: 310,
    height: 60,
    backgroundColor: 'white',
    elevation: 0,
    shadowColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: ' rgba(0, 0, 0, 0.2)',
    paddingLeft: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
    marginVertical: 7,
    // elevation: 10,
  },
  cardContainer: {
    width: 320,
    height: 220,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 10,
    // marginVertical: 10,
    // elevation: 10,
  },
  title: {
    width: 300,
    height: 30,
    textAlign: 'left',
    marginLeft: 20,

    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
  },

  nameInput: {
    alignSelf: 'center',
    marginTop: 25,
  },
  btn: {
    marginTop: 20,
  },
});

export default AddMoney;
