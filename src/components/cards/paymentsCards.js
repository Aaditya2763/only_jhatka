import React from "react";
import { View, StyleSheet, Pressable, Text,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Color } from "../../constants/style/style";


const PaymentCard = ({ onPress,source,title,desc,style }) => {
    return (

            <View style={[styles.Card,style]}>
                <View style={styles. icon}>
                <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                       <Image source={source} style={styles.img} />
                    </Pressable>
                 
                 </View>
                <View style={styles.Buttons} >
                    <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                        <Text style={styles.Btn1}>{title}</Text>
                    </Pressable>
                    <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                        <Text style={styles.Btn2}>{desc}</Text>
                    </Pressable>
                </View>
               
                
            </View>

      
    )
}
const styles = StyleSheet.create({
container:{

},
    Card: {
        width: 315,
        height: 70,
        flexDirection:"row",
      
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
    },
    Buttons: {
        
        width: 250,
        height: 40,
        justifyContent: "space-between",
        alignSelf:"center",
        
    },
    icon:{
width:40,
height:40,

borderRadius:5,
marginLeft:10,
borderWidth:1.9,

    },
  img:{
    width:30,
    height:30,
    borderWidth:1,
    resizeMode:"center",
    marginTop:5,
alignSelf:"center",

    },
    Btn1:{
        fontFamily:"Poppins-Medium",
        marginTop:-5,
        fontWeight:"500",
        fontSize:18,
        marginLeft:20,
    color:"black",
        lineHeight:27,
    },
    Btn2:{
        fontFamily:"Poppins-Medium",
        fontSize:14,
        marginLeft:20,
        opacity:0.5,
        fontWeight:"600",
      
    color:Color.dark,
        lineHeight:21,
    },

    pressed: {
        opacity: 0.75,
    },
})
export default PaymentCard;