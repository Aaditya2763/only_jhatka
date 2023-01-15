import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
//importing components
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import WelcomeScreenNameInput from '../../components/welcomeScreenInput/welcomeScreenNameInput';
import Title from '../../constants/ui/title/title';
import CouponCard from '../../components/coupon/couponCard';
//importing images
import Check from '../../assets/icons/check.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import NotificationCard from '../../components/cards/notificationCard';
import NotificationTitle from '../../constants/ui/title/NotificationTitle';

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />

      {/* <NotificationTitle title={'Notification'} /> */}
      <ScrollView style={styles.scrollContainer}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.white,
    elevation: 1,
    // borderWidth:1,
    borderRadius: 10,
  },
  scrollContainer: {
    height: '100%',
    backgroundColor: Color.white,
    marginTop: 10,
  },
  inputBox: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: 315,
    height: 48,
  },
  title: {
    width: '100%',
    height: 30,
    color: 'black',
    opacity: 1,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 10,

    fontFamily: 'Poppins',
  },
});

export default NotificationScreen;
