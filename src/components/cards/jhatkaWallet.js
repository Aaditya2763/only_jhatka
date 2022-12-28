import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Color } from "../../constants/style/style";
import SwitchButton from "../../constants/ui/button/switchButton";
import Source from "../../assets/icons/BankIcons/walletIcon.png"

const JhatkaWallet = ({ onPress, source, title, price, style }) => {
    return (

        <View style={[styles.Card, style]}>
            <View style={styles.icon}>
                
                    <Image source={Source} style={styles.img} />
                    <Pressable
                    onPress={onPress}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <Text style={styles.Btn1}>Jhatka wallet</Text>
                </Pressable>

            </View>
            <View style={styles.Buttons} >
                    <Text style={styles.price}>Rs.{price}</Text>
                    <SwitchButton />
             
            </View>

            <View>

            </View>

        </View>


    )
}
const styles = StyleSheet.create({
  
    Card: {
        width: 320,
        height: 52,
        flexDirection: "row",
        marginTop: 5,
alignItems:"center",
backgroundColor: "white",
elevation: 10,
shadowColor: 'rgba(0, 0, 0, 0.6)',
alignSelf: "center",
alignItems:"center",
marginVertical: 5,
shadowColor: 'rgba(0, 0, 0, 0.6)',
backgroundColor: 'white',
paddingLeft: 10,
paddingVertical: 0,
paddingHorizontal: 0,
borderRadius:10,
marginVertical: 10,
elevation: 10,
        borderRadius: 10,

    },
    Buttons: {

        width: 120,
        height: 40,
        flexDirection: "row",
    marginTop:10,

    },
    icon: {
        width: 200,
        height: 40,
     flexDirection:"row",
        borderRadius: 5,
    
        color: "grey",

    },
  

    img: {
        width: 35,
        height: 35,
        
        resizeMode: "cover",
        marginTop: 0,
        marginLeft:5,
       

    },
    Btn1: {
        fontFamily: "Poppins-Medium",
      
        fontWeight: "500",
        fontSize: 16,
        marginLeft:5,
        color: "black",
        marginTop:8,
       
      
    },
    price:{
        fontFamily: "Poppins-Medium",
      
        fontWeight: "500",
        fontSize: 14,
        marginLeft:5,
        marginTop:3,
        paddingRight:5,
        color: "black",
         
    },
   

    pressed: {
        opacity: 0.75,
    },
})
export default JhatkaWallet;