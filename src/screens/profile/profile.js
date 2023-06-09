import React from 'react';
import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';
//importing components
import HeaderTitle from '../../constants/ui/title/headerTitle';

import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import { Color } from '../../constants/style/style';
import UPICard from '../../components/cards/Upicard';
import ProfileCard from '../../components/cards/profileCard';
import profileIcon from '../../assets/icons/profileIcon/profileicon.png';
import NotificationIcon from '../../assets/icons/profileIcon/notificationIcon.png';
import addressBookIcon from '../../assets/icons/profileIcon/addressBookIcon.png';
import privacyIcon from '../../assets/icons/profileIcon/privacyIcon.png';
import ContactIcon from '../../assets/icons/profileIcon/contactIcon.png';
import logOutIcon from '../../assets/icons/profileIcon/logOutIcon.png';
import icon from '../../assets/icons/profileIcon/leftIcon.png';
import WalletIcon from '../../assets/icons/BankIcons/walletIcon.png';

import NetBankingCard from '../../components/cards/netBankingCard';
import LogoutCard from '../../components/cards/logoutCard';

import DetailsCard from '../../components/cards/detailsCard';

import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {user} from '../../redux/user/userSlice';

//importing images
const Profile = () => {
  const navigation = useNavigation();
  const userData = useSelector(user);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <TitleWithBackBtn title={'Profile '} style={styles.title} /> */}
      {userData.map(item => {
        return (
          <ProfileCard
            key={item.id}
            title={item.userName}
            desc={item.phoneno}
            source={profileIcon}
            onPress={() => navigation.navigate('EditProfile')}
          />
        );
      })}
      <View style={styles.cardBox}>
        <DetailsCard
          title={'Notification'}
          desc={'Lorem ipsom dolor amet'}
          source={NotificationIcon}
          icon={icon}
          onPress={() => navigation.navigate('Notification')}
        />
        <DetailsCard
          title={'AddressBook'}
          desc={'Lorem ipsom dolor amet'}
          source={addressBookIcon}
          icon={icon}
        />
        <DetailsCard
          title={'Privacy Policy'}
          desc={'Lorem ipsom dolor amet'}
          source={privacyIcon}
          icon={icon}
        />
        <DetailsCard
          title={'Jhatka Wallet'}
          desc={'Lorem ipsom dolor amet'}
          source={WalletIcon}
          icon={icon}
          onPress={() => navigation.navigate('JhatkaWallets')}
        />
        <DetailsCard
          title={'Contact Us'}
          desc={'Lorem ipsom dolor amet'}
          source={ContactIcon}
          icon={icon}
        />
      </View>
    </View>
  );
};

{
  /* <<<<<<< HEAD
const EditProfile=()=>{
    const User=useSelector(user);
console.log(User);
    return(
        <View style={styles.container}>
  <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
  <TitleWithBackBtn title={"Profile "} style={styles.title}  />
<ProfileCard  title={User.name} desc={User.phoneNo} source={profileIcon}/>
<View style={styles.cardBox} >
<DetailsCard  title={"Notification"} desc={"Lorem ipsom dolor amet"} source={NotificationIcon} icon={icon}/>
<DetailsCard  title={"AddressBook"} desc={"Lorem ipsom dolor amet"} source={addressBookIcon} icon={icon}/>
<DetailsCard  title={"Privacy Policy"} desc={"Lorem ipsom dolor amet"} source={privacyIcon} icon={icon}/>
<DetailsCard  title={"Contact Us"} desc={"Lorem ipsom dolor amet"} source={ContactIcon} icon={icon}/>


</View>

<LogoutCard title={"Contact Us"} source={logOutIcon} style={styles.logout} />
        </View>
    )
}
=======
      <LogoutCard title={'Logout'} source={logOutIcon} style={styles.logout} />
    </View>
  );
}; */
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  cardBox: {
    width: 320,
    height: 347,
    marginTop: 20,
    alignSelf: 'center',

    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    // marginVertical: 10,
  },
  logout: {
    alignSelf: 'center',
    height: 70,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    // marginVertical: 10,
  },
  title: {
    marginLeft: 20,
  },
});

export default Profile;
