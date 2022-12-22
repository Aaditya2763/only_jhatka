import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Color } from "../../constants/style/style";
import PrimaryButton from "../../constants/ui/button/primaryButton";
import Title from "../../constants/ui/title/title";

const CouponCard = ({ onPress }) => {
    return (
       
     
           
            <View style={styles.coupon}>
                <View style={styles.Buttons} >
                    <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                        <Text style={styles.codeBtn}>Code</Text>
                    </Pressable>
                    <Pressable
                        onPress={onPress}
                        style={({ pressed }) => pressed && styles.pressed}>
                        <Text style={styles.removeBtn}>Apply</Text>
                    </Pressable>
                </View>
                <Text style={styles.offer}>Get 20% OFF up to Rs.50</Text>
                <View style={styles.desc}>
                    <Text style={styles.couponDetails}>Valid on offers with items worth Rs.199</Text>
                    <Text style={styles.more}>+MORE</Text>
                </View>
            </View>

      
    )
}
const styles = StyleSheet.create({
container:{

},
    coupon: {
        width: 315,
        height: 100,
        backgroundColor: "white",
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        alignSelf: "center",
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
        flexDirection: "row",
        width: 290,
        height: 30,
      marginTop:10,
        justifyContent: "space-between",
        alignSelf:"center",
        
    },
    codeBtn: {
        width: 70,
        height: 25,
        backgroundColor: "#08C768",
        color: "white",
        textAlign:"center",
        paddingTop:3,
        borderRadius: 10,
        fontStyle: "normal",
        fontSize: 12,
        lineHeight: 15,
        fontWeight: "700",
        fontFamily: 'Poppins',
    },
    removeBtn:{
      color:"#F7A399", 
       borderBottomColor:"#F7A399",
       borderBottomWidth:1,
    },
    offer:{
width:170,
height:21,
fontStyle: "normal",
fontSize: 14,
lineHeight: 21,
fontWeight: "500",
fontFamily: 'Poppins',
color:"black",
opacity:0.8,

marginLeft:20,
    },
    desc:{
        width:260,
        height:30,
        marginTop:3,
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"flex-start",
        marginLeft:20,
    },
    couponDetails:{

fontSize: 12,
lineHeight: 18,
fontWeight: "700",
fontFamily: 'Poppins',
color:"black",
opacity:0.4,
    },
    more:{
       
        fontSize: 12,
lineHeight: 18,
marginLeft:-0,
fontWeight: "700",
fontFamily: 'Poppins',
color:"#00BAF2",
    },
    pressed: {
        opacity: 0.75,
    },
})
export default CouponCard;