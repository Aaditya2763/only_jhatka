import React from "react";
import { View, StatusBar, StyleSheet, Text, Image, Pressable } from "react-native";
//importing components 
import HeaderTitle from "../../constants/ui/title/headerTitle";

import TitleWithBackBtn from "../../constants/ui/title/titleWithBackBtn";
import profile from "../../assets/icons/profileIcon/profileWithcamIcon.png"
import WelcomeScreenNameInput from "../../components/welcomeScreenInput/welcomeScreenNameInput";
import WelcomeScreenPhoneNumInp from "../../components/welcomeScreenInput/welcomeScreenPhoneNumInp";

//images
import User from "../../assets/images/user.png"
import phone from "../../assets/images/phone.png"
import Location from "../../assets/icons/profileIcon/location.png"

import LogoutCard from "../../components/cards/logoutCard";
import UPICard from "../../components/cards/Upicard";
import PrimaryButton from "../../constants/ui/button/primaryButton";



//importing images 


const EditProfile = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <TitleWithBackBtn title={"Edit Profile "} style={styles.title} />
            <View style={styles.imgBox}>
                <Image source={profile} style={styles.img} />
            </View>
            <HeaderTitle title={"Change Profile"} style={styles.title} />
            <WelcomeScreenNameInput source={User} placeholder={"Enter your Name *"} style={{ alignSelf: "center" }} />
            <WelcomeScreenPhoneNumInp source={phone} placeholder={"Enter your Phone Number *"} />
            <HeaderTitle title={"Change Delivery Location"} style={styles.title2} />
            <View style={styles.LocationBox}>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <View style={styles.locationCard}>
                        <Image source={Location} style={styles.LocImg} />
                        <Text style={styles.title3}>Use Current Location</Text>
                    </View>
                </Pressable>
                <Pressable
                    onPress={onPress}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <UPICard style={styles.card} title={"Add Address"} desc={"Enter your Address"} />
                </Pressable>


            </View>
            <PrimaryButton buttonTitle={"confirm"} style={styles.btn} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",

    },
    imgBox: {
        width: 100,
        height: 100,
        marginTop: 20,
        alignSelf: "center",


    },
    img: {
        width: 120,
        height: 120,
        resizeMode: "cover",
    },
    title: {
        fontFamily: "Poppins-Medium",
        marginTop: 20,
        fontWeight: "600",
        fontSize: 18,
        marginBottom: -20,

        color: "black",
        lineHeight: 27
    },
    title2: {
        fontFamily: "Poppins-Medium",
        marginTop: 5,
        fontWeight: "600",
        fontSize: 18,
        alignSelf: "center",
        marginLeft: -30,
        marginBottom: -20,

        color: "black",
        lineHeight: 27
    },
    title3: {
        fontFamily: "Poppins-Medium",
        marginTop: 5,
        fontWeight: "600",
        fontSize: 18,
        alignSelf: "center",
        marginLeft: -40,


        color: "black",
        lineHeight: 27
    },
    locationCard: {
        width: 300,
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",

    },
    LocImg: {
        width: 60,
        height: 60,
        marginTop: 5,
        marginLeft: -35,
    },
    card: {
        backgroundColor: "white",
        elevation: 10,
        shadowColor: 'white',
        alignSelf: "center",
        alignItems: "center",

        shadowColor: 'white',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 10,
        marginLeft: -10,
        elevation: 0,
        marginTop: 0,
        borderTopWidth: 1,
        borderColor: "#D9D9D9",
    },
    LocationBox: {
        width: 315,
        height: 150,


        backgroundColor: "white",
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        alignSelf: "center",
        alignItems: "center",

        shadowColor: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 10,
        marginVertical: -10,
        elevation: 10,

    },
    btn: {
        marginTop: 40,
    },
    pressed: {
        opacity: 0.75,
    },


})

export default EditProfile;