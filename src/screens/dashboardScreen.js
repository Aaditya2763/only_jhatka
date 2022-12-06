import React from "react";
import { View,Text,StatusBar,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


//importing components
import Location from "../components/locationbox/location";
import SearchBar from "../components/searchbar/searchbar";
import { Color } from "../constants/style/style";
import Carousel from "../components/Carousel/carousel";
import HeaderTitle from "../constants/ui/title/headerTitle";
import { Header } from "react-native/Libraries/NewAppScreen";
import ButtonCategories from "../components/categories/Buttoncategories";
import BottomNavbar from "../components/Bottom Navbar/BottonNavBar"
const DashboardScreen=()=>{
//    console.log(JSON.stringify(data));
 
    return(
        <SafeAreaView >
         <View  style={styles.container}>
         <StatusBar barStyle={'dark-content'} backgroundColor={'white'} /> 
        <View>  
            <Location/>
            <SearchBar />  
            <HeaderTitle title={"Top Picks"} style={styles.Header}/>
            <Carousel style={styles.Carousel} />
            <HeaderTitle title={"Categories"}  style={styles.categoriesHeader}/>
           <ButtonCategories/>
           <BottomNavbar/>
        </View>
         </View>
        
        
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Color.white,
    },
    Header:{
        height:50,
        fontFamily:"Poppins-Medium",
        fontWeight:"500",
        fontSize:20,
        lineHeight:30,
        textAlign:"left",
        paddingLeft:12,
      },
      categoriesHeader:{
        marginTop:-18,
        height:30,
        fontFamily:"Poppins-Medium",
        fontWeight:"500",
        fontSize:20,
        lineHeight:30,
        textAlign:"left",
        paddingLeft:12,
      }
  
 
})


export default DashboardScreen;