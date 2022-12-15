import React from "react";
import { View, StyleSheet, Pressable, Text,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Color } from "../../constants/style/style";


const LogoutCard = ({ onPress,source,title,Iconimg,style }) => {
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
                       <Image source={Iconimg} style={styles.Iconimg} />
                    </Pressable>
                </View>
               
               <View>
              
               </View>
                
            </View>

      
    )
}
const styles = StyleSheet.create({
container:{

},
    Card: {
        width: 320,
        height: 50,
        flexDirection:"row",
      marginTop:5,
   
  
borderRadius:10,
   
   
    },
    Buttons: {
        
        width: 250,
        height: 40,
        flexDirection:"row",
        justifyContent: "space-between",
        alignSelf:"center",
        
    },
    icon:{
width:40,
height:40,

borderRadius:5,
marginLeft:10,

color:"grey",

   },
   Iconimg:{
    
    width:20,
    height:20,
marginRight:15,
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
        marginTop:8,
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
export default LogoutCard;