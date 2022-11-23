
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

//importing Screens
import SplashScreen from './src/screens/splashScreen';
import WelcomeScreen from './src/screens/welcomeScreen';
import OtpScreen from './src/screens/otpScreen';
// import SetLocationScreen from './src/screens/setLocationScreen';


//calling stack navigator
const Stack = createNativeStackNavigator();
enableScreens(true);

const App = () => {

  const [ShowSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000)

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <SplashScreen/> */}
        {/* <Home/> */}
        {ShowSplashScreen ? <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
          : null
        }
        {/* <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ headerShown: false }}
        /> */}
         <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
