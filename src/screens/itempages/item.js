import React, {useRef} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
//importing components
import HeaderTitle from '../../constants/ui/title/headerTitle';
import IconButton from '../../constants/ui/button/iconButton';
import Title from '../../constants/ui/title/title';
import PrimaryButton from '../../constants/ui/button/primaryButton';
import CustomiseItemButton from '../../constants/ui/button/customiseItemButton';
import VectorImages from '../../components/VectorImages/vectorImages';
import ProductWithNameImageOnly from '../../components/Product/productwWthNameImageOnly';
//importing images
import arrowDown from '../../assets/icons/Arrowdown.png';
import backButton from '../../assets/images/backButton.png';
import Chikcen from '../../assets/images/chicken.png';
import ChickenLegs from '../../assets/images/itemImages/chickenLegs.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import {ScrollView} from 'react-native-gesture-handler';
// BottomSheets

import RBSheet from 'react-native-raw-bottom-sheet';
import CutomizeProducts from '../../constants/ui/bottomSheet/addBottomCutomizeProduct';
import { useNavigation } from '@react-navigation/native';

const Item = () => {
  const bottomSheetref = useRef();
  const navigation=useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        {/* <View style={styles.HeaderBox}>
          <IconButton source={backButton} style={styles.icon} />
          <HeaderTitle title={'Chicken'} style={styles.Header} />
        </View> */}
        <View style={styles.imageContainer}>
          <VectorImages source={ChickenLegs} style={styles.image} />
          <View style={styles.itemDescription}>
            <HeaderTitle title={'Chicken Legs'} style={styles.itemName} />

            <Text style={styles.itemRating}>{'4.6'}⭐</Text>
            <HeaderTitle title={'Rs. 550'} style={styles.itemPrice} />
          </View>
          <Text style={styles.Description}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est+more....'
            }
          </Text>
          <CustomiseItemButton
            title={'Customise as per your need'}
            style={styles.customiseButton}
            source={arrowDown}
            onPress={() => this[RBSheet + bottomSheetref].open()}
          />
          <PrimaryButton
            buttonTitle={'Add to Cart'}
            style={styles.addtoCartButton}
            onPress={() => navigation.navigate('CartItemDetails')}
          />
        </View>
        <HeaderTitle title={'Recommended'} style={styles.recomendedHeading} />
        <ScrollView style={styles.product} horizontal>
          <ProductWithNameImageOnly
            style={styles.rcmdProduct}
            image={Chikcen}
            title={'Chicken'}
          />
          <ProductWithNameImageOnly
            style={styles.rcmdProduct}
            image={Chikcen}
            title={'Chicken'}
          />
          <ProductWithNameImageOnly
            style={styles.rcmdProduct}
            image={Chikcen}
            title={'Chicken'}
          />
          <ProductWithNameImageOnly
            style={styles.rcmdProduct}
            image={Chikcen}
            title={'Chicken'}
          />
          <CutomizeProducts openBottomSheet={bottomSheetref} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.white,
  },
  HeaderBox: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  icon: {
    width: 22,
    height: 12,
    fontWeight: '400',
    marginTop: -30,
    textAlign: 'center',
  },
  Header: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 30,
    marginLeft: 10,
  },
  imageContainer: {
    width: 362,
    height: 510,
    backgroundColor: Color.white,
    marginLeft: 15,

    elevation: 1,
    borderRadius: 10,
    // justifyContent:"center",
  },
  image: {
    marginTop: -50,
    marginLeft: 5,
    resizeMode: 'center',
    aspectRatio: 1.1,
  },
  itemDescription: {
    width: 150,
    margin: -50,
    marginLeft: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'left',

    width: 230,
    height: 30,
  },
  itemRating: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    width: 40,
    marginLeft: -70,
    marginTop: 2,
    color: 'black',
    height: 30,
  },
  itemPrice: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '700',
    lineHeight: 27,
    fontSize: 18,
    color: Color.primaryColor,
    width: 120,
    height: 30,
    textAlign: 'right',
  },
  Description: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',

    fontSize: 10,
    paddingTop: 45,
    padding: 20,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  customiseButton: {
    marginTop: -10,
  },
  addtoCartButton: {
    marginTop: 10,
    marginHorizontal: 50,
  },
  recomendedHeading: {
    fontFamily: 'Poppins-Medium',
    height: 20,
    fontWeight: '500',
    lineHeight: 27,
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 5,
  },
  product: {
    flexDirection: 'row',
  },
  rcmdProduct: {
    width: 100,
    height: 120,
    marginRight: 1,
  },
});

export default Item;
