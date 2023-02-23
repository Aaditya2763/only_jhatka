import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import UPICard from '../../components/cards/Upicard';
import DeliveryFromTo from '../../components/Delivery/DeliveryFromToBox';
import HeaderTitle from '../../constants/ui/title/headerTitle';
import Title from '../../constants/ui/title/title';
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import CashOnDeliveryIcon from '../../assets/icons/UpiIcons/cashOnDeliveryIcon.png';
import NetBankingIcon from '../../assets/icons/UpiIcons/netBankingIcon.png';
import WalletIcon from '../../assets/icons/UpiIcons/walletIcon.png';
import VoucherImage from '../../assets/images/voucherImage.png';
import PaymentCard from '../../components/cards/paymentsCards';
import WalletCard from '../../components/cards/walletCard';
import VoucherCard from '../../components/cards/voucherCard';
import {useNavigation} from '@react-navigation/native';
const Wallet = () => {

const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        style={styles.bar}
      />
      {/* <TitleWithBackBtn title={'Use other Wallets'} /> */}
      <View style={styles.cardContainer}>
        <WalletCard
          title={'lorem Ipsom'}
          desc={'lorem Ipsom dolor amet'}
          source={WalletIcon}
          onPress={() => navigation.navigate('AddMoneyVoucher')}
        />
        <WalletCard
          title={'lorem Ipsom'}
          desc={'lorem Ipsom dolor amet'}
          source={WalletIcon}
          onPress={() => navigation.navigate('AddVoucher')}
        />
        <WalletCard
          title={'lorem Ipsom'}
          desc={'lorem Ipsom dolor amet'}
          source={WalletIcon}
          onPress={() => navigation.navigate('AddVoucher')}
        />
        {/* <VoucherCard source={VoucherImage}
title={"Total Wallet balance"}
desc={"Lorem ipsum dolor amet, consectetur..."}
 price={"Rs. 1000"}
 /> */}
      </View>
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
});

export default Wallet;
