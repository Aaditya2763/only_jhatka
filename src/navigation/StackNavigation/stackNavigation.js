import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';
import {Color} from '../../constants/style/style';

//importing Screens Stack Screens ;
import SplashScreen from '../../screens/splashScreen';
import SetLocationScreen from '../../screens/setLocationScreen';
import SetDelveryLoactionScreen from '../../screens/setDeliveryLocationScreen';
import WelcomeScreen from '../../screens/welcomeScreen';
import OtpScreen from '../../screens/otpScreen';
// import custom component
import IconButton from '../../constants/ui/button/iconButton';
import BackButton from '../../assets/icons/backButton.png';
import SearchButton from '../../assets/icons/SearchButton.png';
//calling stack navigator
const Stack = createNativeStackNavigator();
enableScreens(true);

const StackNaviagtion = () => {
  const [ShowSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, []);

  return (
    <Stack.Navigator>
      {/* <SplashScreen/> */}
      {/* <Home/> */}
      {ShowSplashScreen ? (
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      ) : null}
      <Stack.Screen
        name="setLocationScreen"
        component={SetLocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="setDeleveryLoactionScreen"
        component={SetDelveryLoactionScreen}
        options={({navigation}) => ({
          headerTransparent: true,
          title: 'Set Location',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontWeight: '600',
            fontSize: 20,
            color: Color.dark,
          },
          headerRight: () => (
            <IconButton
              onPress={() => navigation.navigate('WelcomeScreen')}
              source={SearchButton}
              style={styles.iconSize}
            />
          ),
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.goBack()}
              source={BackButton}
            />
          ),
        })}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: 20,
    width: 20,
  },
  herderStyle: {
    marginTop: 200,
  },
});
export default StackNaviagtion;
