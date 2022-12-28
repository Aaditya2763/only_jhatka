import React from "react";
import { StyleSheet, Text, View, StatusBar, Pressable, Image, ImageBackground } from 'react-native';
import Title from "../../constants/ui/title/title";



const VoucherCard = ({ style, source, title, price, desc }) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={source} style={styles.voucherCard}>
                <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
                <Text style={styles.desc}>{desc}</Text>
                </View>
            </ImageBackground>

        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        width: 400,
        marginTop: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-around",

    },
    voucherCard: {
        width: 340,
        height: 165,
        alignSelf: "center",
        marginTop:10,
        borderRadius:10,
      
        marginLeft:-8,
    },
    textContainer:{
alignSelf:"center",
marginLeft:-25,
marginTop:30,
    },
    title: {

        height:35,
        fontFamily: 'Poppins-Medium',
        fontWeight: "600",
        lineHeight: 30,
        
        fontSize: 20,
        color: "white",

    },
    price:{

        height: 30,
        fontFamily: 'Poppins-Medium',
        fontWeight: "700",
        lineHeight: 30,
        fontSize: 30,
        color: "white",
    },
    desc:{
        height: 30,
        fontFamily: 'Poppins-Medium',
        fontWeight: "600",
        lineHeight: 30,
        fontSize: 12,
        color: "white", 
    }
})


export default VoucherCard;