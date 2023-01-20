import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';

//importing redux components
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../../redux/counter/couterSlice';

//importing components
import HeaderTitle from '../../constants/ui/title/headerTitle';
import IconButton from '../../constants/ui/button/iconButton';
import Title from '../../constants/ui/title/title';
import VectorImages from '../../components/VectorImages/vectorImages';
//importing images
import backButton from '../../assets/images/backButton.png';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Color} from '../../constants/style/style';
import PrimaryButton from '../../constants/ui/button/primaryButton';
import ChickenLegs from '../../assets/images/itemImages/chickenLegs.png';
import {color} from 'react-native-reanimated';

const CartitemDetails = ({onPress}) => {
  const Count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

    return (
      <View>
          <View >
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={styles.HeaderBox}>
                <IconButton source={backButton} style={styles.icon} />
                <HeaderTitle title={" Your Cart"} style={styles.Header} />
            </View>
            <HeaderTitle title={"Cart"} style={styles.CartHeading} />
            <View style={styles.Itemcontainer}>
                <View style={styles.itemImg}>
                    <Image source={require('../../assets/images/itemImages/chickenLegs.png')} style={styles.img} />
                </View>
                <View style={styles.itemDesc}>
                    <View style={styles.itemTitle}>
                        <Text style={styles.title}>chicken Legs</Text>  
                         <Pressable
                            onPress={onPress}
                            style={({ pressed }) => pressed && styles.pressed}>
                            <View style={styles.ImageBox}>
                                <Image source={require('../../assets/icons/lightdelBtn.png')} style={styles.delBtn} />
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.serve}>
                        <Text>4 Pieces | </Text>
                        <Text>500 gms | </Text>
                        <Text>Serves 2</Text>
                    </View >
                    
                    <View style={styles.btnSection}>
                    <View style={styles.btnBox} >
                     
                            {/* <PrimaryButton buttonTitle={"+    "} style={styles.button} /> */}
                            <Pressable
                                onPress={onPress}
                                style={({ pressed }) => pressed && styles.pressed}>
                                <Text style={styles.itemQuantity} onPress={() => dispatch(increment())}>+ </Text>
                            </Pressable>
                            <Pressable
                                onPress={onPress}
                                style={({ pressed }) => pressed && styles.pressed}>
                                <Text style={styles.itemQuantity}>{Count}</Text>
                            </Pressable>
                            <Pressable
                                onPress={onPress}
                                style={({ pressed }) => pressed && styles.pressed}>
                                <Text style={styles.itemQuantity} onPress={() => dispatch(decrement())}> -</Text>
                            </Pressable>
                         
                        </View>
                        <Title title={"Rs." + `${Count * 550}`} style={styles.price} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: Color.white,
      elevation: 1,
      borderRadius: 10,
  },
  Itemcontainer: {
      width: 340,
      height: 120,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: Color.white,
      elevation: 2,
      marginTop: 20,
      borderRadius: 10,
  },
  HeaderBox: {
      width: '100%',
      height: 30,
      flexDirection: 'row',
  },
  ImageBox: {
      width: 35,
      height: 25,
      borderRadius: 2,
      borderWidth: 0.1,

      alignItems: 'center',
      marginLeft: 20,
      marginTop: -10,
  },
  icon: {
      width: 22,
      height: 16,
      fontSize: 12,
      marginTop: -30,



  },
  Header: {
      fontFamily: 'Poppins-Medium',
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 30,
      marginLeft: 10,
  },

  CartHeading: {
      fontFamily: 'Poppins-Medium',
      width: "100%",
      height: 70,
      height: 20,

      backgroundColor: "white",
      fontWeight: '500',
      lineHeight: 27,
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 15,
      marginTop: 5,
  },
  itemImg: {
      width: 90,
      height: 88,


  },
  itemDesc: {
      width: 210,
      height: 86,
      flexDirection: 'column',

  },
  itemTitle: {
      width: 100,
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
  },
  title: {
      width: 150,
      fontSize: 18,
      fontFamily: 'Poppins',
      color: "black",
      height: 25,

      fontWeight: "500",
      lineHeight: 27,
      fontSize: 18,
  },
  delBtn: {
      alignSelf: 'center',
      marginTop: 5,

  },
  img: {
      width: 90,
      height: 90,
      resizeMode: 'stretch',
      borderRadius: 15,
      marginLeft: 5,

  },
  itemQuantity: {
      width: 40,
      color: "white",
      fontFamily: 'Poppins-Medium',
      fontWeight: '500',
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 30,

  },
  serve: {
      width: 200,
      height: 25,
      flexDirection: 'row',
      fontFamily: 'Poppins',
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 12,
      marginTop: -75,
  },
  button: {
      width: 30,
      height: 25,
      fontSize: 10,

      justifyContent: 'center',

  },
  btnBox: {
      width: 80,
      borderWidth: 1,
      height: 28,
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: -10,
      borderColor: Color.primaryColor,
      backgroundColor: Color.primaryColor,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  price: {
      width: 100,
      heigth: 35,
      fontWeight: "700",
      fontSize: 18,
      marginTop: 2,
      fontSize: 22,
      fontFamily: "Poppins",
      color: 'black',
      lineHeight: 27,
  },
  btnSection: {
      width: 220,
      height: 150,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
  }, pressed: {
      opacity: 0.75,
  },
});


export default CartitemDetails;
