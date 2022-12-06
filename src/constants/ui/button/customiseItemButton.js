import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Color} from '../../style/style';

const customiseItemButton=({title, onPress,style})=>{
    return(
        <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.buttonStyle,style]}>
          <Text style={styles.buttonTitle}>{title}</Text>
          <Text style={styles.arrow}>V</Text>
        </View>
      </Pressable>
    ) 
}
const styles = StyleSheet.create({
buttonStyle:{
    flexDirection:'row',
    borderRadius:10,
    borderWidth:1,
    borderColor:Color.dark,
    height: 52,
    width: 300,
marginHorizontal:25,
   
    justifyContent: 'center',
   alignItems:'center',

   
  },
  buttonTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color:"black",
    fontFamily: 'Poppins-SemiBold',
  },
  pressed: {
    opacity: 0.75,
  },
  arrow:{
 
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color:"black",
    
    marginLeft:5,
    marginTop:-5,
  }
}
)
export default customiseItemButton;