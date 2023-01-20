import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import UPICard from '../../components/cards/Upicard';

import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';

import VoucherImage from '../../assets/images/voucherImage.png';

import VoucherCard from '../../components/cards/voucherCard';
import {ScrollView} from 'react-native-gesture-handler';
import NotificationCard from '../../components/cards/notificationCard';
import HeaderTitle from '../../constants/ui/title/headerTitle';
import {useNavigation} from '@react-navigation/native';
import { allNotifications } from "../../redux/notification/notificationSlice";
import notificationSlice from '../../redux/notification/notificationSlice';
import { useSelector } from 'react-redux';

  
const WalletWithJhatkaWallet = () => {
  const Notifications = useSelector(allNotifications);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}
        style={styles.bar}
      />

 <ScrollView>
      <VoucherCard
        source={VoucherImage}
        title={'Total Wallet balance'}
        desc={'Lorem ipsum dolor amet, consectetur...'}
        price={'Rs. 1000'}
      />
      <UPICard
        title={'Add Money'}
        desc={'Lorem ipsum doloe emet'}
        onPress={() => navigation.navigate('addMoney')}
      />
      <UPICard
        title={'Add Voucher'}
        desc={'Lorem ipsum doloe emet'}
        onPress={() => navigation.navigate('addVoucher')}
      />
      <HeaderTitle title={'Transection History'} style={styles.title} />
     
      {
          Notifications.map((notification) => {
            return (
              <NotificationCard title={notification.title} key={notification.id} />
            )
          })
        }
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
});

export default WalletWithJhatkaWallet;
