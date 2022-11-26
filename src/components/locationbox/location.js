import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Color } from "../../constants/style/style";
import HeaderTitle from "../../constants/ui/title/headerTitle";
import Title from "../../constants/ui/title/title";

const LocationBox = () => {
    return (



        <View style={styles.container} >

            <View style={styles.box}>
                <Image source={require('../../assets/images/locationLogo.png')} style={styles.image} />

            </View>
            <View style={styles.location}>
                <HeaderTitle title={"Location"} style={styles.locationHeader} />
                <Title title={"Lorem ipsum dolor amet.."} style={styles.LocationTitle} />

            </View>
        </View>



    )
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:70,
        justifyContent: "flex-start",
        align:"center",
        flexDirection: "row",
        backgroundColor: Color.white,
        paddingTop:10,
       
    },

    box: {
        backgroundColor: Color.white,
    },

    image: {
        height: 25,
        width: 20,
        marginTop: 10,
        marginLeft: 20,
    },

    location: {
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: Color.white,
    },

    locationHeader: {
        fontSize: 18,
        linHeight: 25,
        fontWeight: '700',
        fontFamily: 'Poppins-Medium',
        marginLeft: -40,
    },

    LocationTitle: {
        fontSize: 12,
        marginTop: -25,
        fontWeight: '600',
        fontFamily: 'Poppins-Medium',
        linHeight: 25,
        marginLeft: -25,
        color: "#2D2D2D",



    }
})

export default LocationBox;