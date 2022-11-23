import React from 'react';
import { View,Image,StatusBar,StyleSheet } from "react-native";
import Logo from '../assets/images/splashImage.jpg';
export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <StatusBar  barStyle={'dark-content'} backgroundColor={'white'} />
            <Image source={Logo} style={StyleSheet.logo} />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
       alignItems:'center',
       backgroundColor:'white',
     
    },
Logo:{
    height:200,
    width:200,
    backgroundColor:'white',

}
})