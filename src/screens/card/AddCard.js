import React from 'react';
import {View, StatusBar, StyleSheet, Text, Image} from 'react-native';
//importing components
import HeaderTitle from '../../constants/ui/title/headerTitle';
import backButton from '../../assets/images/backButton.png';
import TitleWithBackBtn from '../../constants/ui/title/titleWithBackBtn';
import {Color} from '../../constants/style/style';
import Title from '../../constants/ui/title/title';
import WelcomeScreenNameInput from '../../components/welcomeScreenInput/welcomeScreenNameInput';
import WelcomeScreenPhoneNumInp from '../../components/welcomeScreenInput/welcomeScreenPhoneNumInp';
//importing images
import Check from '../../assets/icons/check.png';
import IconButton from '../../constants/ui/button/iconButton';
import PrimaryButton from '../../constants/ui/button/primaryButton';
const AddCard = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <TitleWithBackBtn title={'Add new card'} />
      <Text style={styles.Desc}>
        We accept Credit and Debit cards from Visa,Masterard, American Express,
        Sodexo, Rupay,Maestro & Diners
      </Text>
      <WelcomeScreenPhoneNumInp
        placeholder={'Enter Card Number'}
        style={styles.inputBox}
      />
      <WelcomeScreenNameInput
        placeholder={'Enter Name on Card'}
        style={styles.inputBox}
      />
      <View style={styles.Box}>
        <WelcomeScreenPhoneNumInp
          placeholder={'Valid(MM/YY)'}
          style={styles.dateInp}
        />
        <WelcomeScreenPhoneNumInp placeholder={'CVV'} style={styles.CVVInput} />
      </View>
      <Text style={styles.Desc}>
        We will save this card for your convenience. If required, you can remove
        the card in the ‘Payments’ section. We do not save your CVV.
      </Text>
      <PrimaryButton style={styles.Btn} buttonTitle={'Add Card'} />
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
    height: 70,
    color: 'black',

    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontWeight: '700',
    opacity: 0.5,
    fontSize: 16,
    marginTop: 15,
    lineHeight: 22,
  },

  inputBox: {
    width: 350,
    height: 50,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
  },
  Box: {
    width: 350,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 10,
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

export default AddCard;
