import React from "react";
import { View,StatusBar,StyleSheet } from "react-native";

import HeaderTitle from "../../constants/ui/title/headerTitle";

import TitleWithBackBtn from "../../constants/ui/title/titleWithBackBtn";

import AxisBank from "../../assets/icons/BankIcons/Axisbank.png";
import sbi from "../../assets/icons/BankIcons/sbi.png";
import hdfc from "../../assets/icons/BankIcons/hdfc.png";
import icici from "../../assets/icons/BankIcons/icici.png";
import kotak from "../../assets/icons/BankIcons/kotak.png";
import Kvb from "../../assets/icons/BankIcons/kvb.png";
import Icon from "../../assets/icons/BankIcons/icon.png";
import NetBankingCard from "../../components/cards/netBankingCard";
import SearchBar from "../../components/searchbar/searchbar";
import NetBAnkingSearchBar from "../../components/searchbar/netBankingSearchBar";
import JhatkaWallet from "../../components/cards/jhatkaWallet";
const NetBankingWithJhatkaWallet=()=>{
    return(
        <View style={styles.container}>
  <StatusBar barStyle={'dark-content'} backgroundColor={'white'} style={styles.bar}/>
<TitleWithBackBtn title={"Net Banking"} />
<JhatkaWallet price={"1000"} />
<HeaderTitle title={"Select Your Bank For Payment"}  style={styles.title} />
<NetBAnkingSearchBar placeholder={" Search Bank"}/>
<HeaderTitle title={"All Banks"}  style={styles.title} />
<View style={styles.cardContainer}>
<NetBankingCard title={"Axis Bank"} Iconimg={Icon} source={AxisBank}/>
<NetBankingCard title={"SBI Bank"} Iconimg={Icon} source={sbi}/>
<NetBankingCard title={"Kotak Bank"} Iconimg={Icon} source={kotak}/>
<NetBankingCard title={"HDFC Bank"} Iconimg={Icon} source={hdfc}/>
<NetBankingCard title={"ICICI Bank"} Iconimg={Icon} source={icici}/>
<NetBankingCard title={"KVB Bank"} Iconimg={Icon} source={Kvb}/>
</View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:"100%",
backgroundColor:"white",
    },
    card:{
width:310,
height:60,
backgroundColor: "white",
elevation: 0,
shadowColor: 'white',
alignSelf: "center",
alignItems:"center",
borderBottomWidth:1,
borderBottomColor:" rgba(0, 0, 0, 0.2)",
backgroundColor: 'white',
paddingLeft: 0,
paddingVertical: 0,
paddingHorizontal: 0,
borderRadius:0,
marginVertical: 7,
elevation: 10,
    },
    SearchBox:{
        marginTop:-5,
    width:350,
    height:50,
      },
    cardContainer:{
        width:320,
        height:340,
        alignSelf:"center",
        paddingTop:10,
        
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
   title:{
    width:300,
    height:30,
    textAlign:"left",
    marginLeft:20,
    marginTop:10,
    marginBottom:5,
    fontFamily:"Poppins-Medium",
    fontWeight:"500",
    fontSize:18,
    lineHeight:27,
   }
})

export default NetBankingWithJhatkaWallet;