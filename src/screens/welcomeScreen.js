//import libraries
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import ShadowBox from '../components/setLocationComponent/shadowBox';
import VectorImages from '../components/VectorImages/vectorImages';
import { Color } from '../constants/style/style';
import PrimaryButton from '../constants/ui/button/primaryButton';
import HeaderTitle from '../constants/ui/title/headerTitle';
import WelcomeScreenNameInput from '../components/welcomeScreenInput/welcomeScreenNameInput';
import WelcomeScreenPhoneNumInp from '../components/welcomeScreenInput/welcomeScreenPhoneNumInp';
// import Title from '../constants/ui/title/title';

// create a component
const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
            <View style={styles.container}>
                <VectorImages source={require('../assets/images/welcomeImage.jpg')} style={styles.image} />

                <View>
                    <HeaderTitle
                        title={'Welcome'}
                        style={styles.headerStyle}
                    />
                    <Text style={styles.title}>Sign up and Login with your Mobile number</Text>
                </View>
                <View style={styles.inputContainer}>
                    <WelcomeScreenNameInput  source={require('../assets/images/user.png')} placeholder="Enter your name" />
                    <WelcomeScreenPhoneNumInp  source={require('../assets/images/phone.png')} placeholder="Enter your mobile number" />
                    {/* <TextInput placeholder='Enter your Mobile Number' keyboardType='numeric' maxLength={10} style={styles.input} /> */}
                </View>
                <PrimaryButton buttonTitle={'Continue'} />

            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    inputContainer: {
        // flex: 1,
     
       justifyContent:'center',
        height:200,
       alignItems:'center',

    },
    input:{
        width: 319,
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
    image: {
        marginTop: 0,
    },
    headerStyle: {
        marginTop: 0,
    },
    title: {
        marginTop: -30,
        fontSize: 14,
        fontWeight:'400',
        marginLeft: 15,
        lineHeight: 21,
        textAlign: 'center',
        color: 'black',
        fontFamily: 'Poppins-Medium',
    }
});

//make this component available to the app
export default WelcomeScreen;
