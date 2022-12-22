import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
//importing components
import CustomiseItemButton from '../../constants/ui/button/customiseItemButton';
import Title from "../../constants/ui/title/title";
import ArrowRight from "../../assets/icons/ArrowRight.png"
//importing images

import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '../../constants/style/style';

import CartitemDetails from '../../components/cart/CartItemDetails';
import CouponButton from '../../constants/ui/button/couponButton';
import BillSlip from '../../components/BillSlip';

const CartItemWithoutCoupon = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CartitemDetails/>
            <Text style={styles.OfferTitle}> Offers</Text>
            {/* <Title title={"Offers"} style={styles.OfferTitle} /> */}
           <CouponButton source={ArrowRight} title={"Apply Coupon"} style={styles.cpnBtn} />
           {/* <Title title={"Billings"} style={styles.BillingTitle} /> */}
           <Text style={styles.BillingTitle}> Billings</Text>
           <BillSlip/>
         </SafeAreaView>
         
         )
    }
    const styles = StyleSheet.create({
        container: {
            height: "100%",
            backgroundColor: Color.white,
            elevation: 1,
            borderRadius: 10,
        },
       
        OfferTitle:{
            width:200,
            height:30,
            fontSize:20,
            lineHeight:27,
            color:"black",
            textAlign:'left',
            fontFamily:"Poppins",
            fontWeight:"650",
            marginLeft:12,
            marginTop:10,
            alignItems:'center',
        },
       BillingTitle:{
        width:200,
        height:30,
        fontSize:20,
        lineHeight:27,
        fontFamily:"Poppins",
        fontWeight:"680",
        color:"black",
        textAlign:'left',
        marginLeft:12,
        marginTop:5,
        alignItems:'center',
        }
    })

export default CartItemWithoutCoupon