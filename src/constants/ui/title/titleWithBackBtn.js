
import React from "react";
import { StyleSheet, Text, View, StatusBar,Pressable, Image } from 'react-native';
//importing components


//importing images


const TitleWithBackBtn = ({title,onPress}) => {
    return (
        <View style={styles.container}>
            <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                                   <Image source={require('../../../assets//images/backButton.png')} style={styles.img}/>

                    </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:400,
    marginTop:1,
        alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-around",
      
    },
    img:{
       width:20, 
       height:15,
       marginLeft:-10,
     
      alignSelf:"center",
    },
    title:{
        width:185, 
        height:30,
       fontFamily:'Poppins-Medium',
       fontWeight:"600",
       lineHeight:30,
     
    
  alignSelf:"center",
       fontSize:18,
       color:"black",
  
     },
     pressed: {
        opacity: 0.75,
    },
})
export default TitleWithBackBtn;