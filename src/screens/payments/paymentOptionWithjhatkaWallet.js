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

import PaymentCard from '../../components/cards/paymentsCards';
import JhatkaWallet from '../../components/cards/jhatkaWallet';
import {ScrollView} from 'react-native-gesture-handler';
import JhatkaWalletWithBtn from '../../constants/ui/button/jhatkaWalletWithPrimaryBtn';

import {useNavigation} from '@react-navigation/native';
const PaymentOptionWithJhatkaWalletAndPrimaryBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        style={styles.bar}
      />
      <TitleWithBackBtn title={'Payment Options'} />
      <ScrollView>
        <DeliveryFromTo />
        <JhatkaWalletWithBtn price={'1000'} />
        <HeaderTitle title={'UPI'} style={styles.title} />
        <UPICard title={'UPI'} desc={'Lorem Ipsom dolor amet'}
          onPress={() => navigation.navigate('AddUpiScreen')} />
        <HeaderTitle title={'Credit & Debit cards'} style={styles.title} />
        <UPICard title={'Add Card Details '} desc={'Lorem Ipsom dolor amet'}
         onPress={() => navigation.navigate('AddCard')} />
        <HeaderTitle title={'Other Payments Options'} style={styles.title} />
        <View style={styles.cardContainer}>
          <PaymentCard
            source={CashOnDeliveryIcon}
            title={'Add Card Details '}
            desc={'Lorem Ipsom dolor amet'}
            style={styles.card}
            onPress={() => navigation.navigate('wallet')}
          />
          <PaymentCard
            source={NetBankingIcon}
            title={'Add Card Details '}
            desc={'Lorem Ipsom dolor amet'}
            style={styles.card}
            onPress={() => navigation.navigate('NetBanking')}
          />
          <PaymentCard
            source={WalletIcon}
            title={'Add Card Details '}
            desc={'Lorem Ipsom dolor amet'}
            style={styles.card}
            onPress={() => navigation.navigate('jhatkaWallet')}
          />
        </View>
      </ScrollView>
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

export default PaymentOptionWithJhatkaWalletAndPrimaryBtn;
