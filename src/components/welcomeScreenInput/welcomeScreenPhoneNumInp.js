import React from "react";
import { StyleSheet,View,Image,TextInput } from "react-native";

const WelcomeScreenPhoneNumInp = ({source,placeholder}) => {
  
    return (

            <View style={styles.container}>
            <Image  source={source}  style={styles.image}/>
               <TextInput placeholder={placeholder} keyboardType='numeric' maxLength={10} style={styles.input}  ></TextInput>

            </View>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container:{
       
        flexDirection:'row',
        justifyContent:'flex-start',
        width: 300,
        height: 48,
        fontSize:14,
        borderRadius:10,
        borderWidth:2,
        fontWeight:'400',
        fontFamily:'Poppins-Medium',
        borderColor:'white',
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'white',  
        borderRadius: 10,  
        paddingLeft:10,
        paddingVertical: 0,  
        paddingHorizontal: 0,  
       
        marginVertical: 10,  
        elevation: 10,
    },
    input:{
        width:200,
        paddingLeft:10,
        fontSize:14,
        fontWeight:'400',
        fontFamily:'Poppins-Medium',
    },
image:{
    
   width:20,
   height:25,
    fontSize:14,
    borderRadius:10,
    borderWidth:2,
    fontWeight:'400',
    fontFamily:'Poppins-Medium',
    borderColor:'white',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'white',  
    borderRadius: 10,  
    paddingLeft:5,
    paddingVertical: 0,  
    paddingHorizontal: 0,  
   
    marginVertical: 10,  
    elevation: 10,
    
}
});

//make this component available to the app
export default WelcomeScreenPhoneNumInp;
