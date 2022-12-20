import React from "react";
import { View, StyleSheet, Pressable, Text,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Color } from "../../constants/style/style";


const DetailsCard = ({ onPress,source,title,desc,style, icon }) => {
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
                   <View>
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
                   <View style={{alignSelf:"center"}}>
                   <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                        <Image style={styles.link} source={icon}/>
                    </Pressable>
                   </View>
                </View>
               
                
            </View>

      
    )
}
const styles = StyleSheet.create({
container:{
backgroundColor:"white",
},
    Card: {
        width: 315,
        height: 60,
        flexDirection:"row",
      marginTop:10,
      
        alignSelf: "center",
        alignItems:"center",
        // marginVertical: 5,
     
   
   

   
    },
    Buttons: {
        flexDirection:"row",
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


    },
  img:{
    width:30,
    height:30,
   
    resizeMode:"center",
    marginTop:5,
alignSelf:"center",

    },
    Btn1:{
        fontFamily:"Poppins-Medium",
        marginTop:-5,
        fontWeight:"500",
        fontSize:16,
        marginLeft:10,
    color:"black",
        lineHeight:27,
    },
    Btn2:{
        fontFamily:"Poppins-Medium",
        fontSize:13,
        marginLeft:10,
        opacity:0.5,
        fontWeight:"600",
      
    color:Color.dark,
        lineHeight:21,
    },
    link:{
       width:20,
       height:20,
       
    
    },

    pressed: {
        opacity: 0.75,
    },
})
export default DetailsCard;