import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import DetailsCard from '../../components/cards/detailsCard';
import UPICard from '../../components/cards/Upicard';
import WalletCard from '../../components/cards/walletCard';
import NetBAnkingSearchBar from '../../components/searchbar/netBankingSearchBar';
import {Color} from '../../constants/style/style';
import SelectLocation from '../../assets/icons/profileIcon/selectLocation.png';

//importing components
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
const AddAddress = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      {/* <TitleWithBackBtn title={'Add Address'} /> */}
      <NetBAnkingSearchBar
        placeholder={' Search for area,street...'}
        style={styles.SearchBar}
      />
      <DetailsCard
        title={'Delivery Address'}
        desc={'Lorem Ipsom Dolor Amet....'}
        source={SelectLocation}
      />
      <DetailsCard
        title={'Delivery Address'}
        desc={'Lorem Ipsom Dolor Amet....'}
        source={SelectLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    height: '100%',
  },
  SearchBar: {
    marginTop: 20,
  },

  dateInp: {
    width: 180,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
  },
  CVVInput: {
    width: 100,
    fontFamily: 'Poppins',
    marginLeft: -10,
    fontStyle: 'Regular',
    fontWeight: '700',
    fontSize: 18,

    lineHeight: 21,
  },
  Btn: {
    width: 154,
    height: 40,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default AddAddress;
