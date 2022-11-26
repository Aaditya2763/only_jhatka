import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens';

//importing Screens
import SplashScreen from './src/screens/splashScreen';
import SetLocationScreen from './src/screens/setLocationScreen';
import SetDelveryLoactionScreen from './src/screens/setDeliveryLocationScreen';
import WelcomeScreen from './src/screens/welcomeScreen';
import OtpScreen from './src/screens/otpScreen';
import DashboardScreen from './src/screens/dashboardScreen';
// import custom component
import {Color} from './src/constants/style/style';
import IconButton from './src/constants/ui/button/iconButton';
import BackButton from './src/assets/icons/backButton.png';
import SearchButton from './src/assets/icons/SearchButton.png';

//calling stack navigator
const Stack = createNativeStackNavigator();
enableScreens(true);

const App = () => {
  const [ShowSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
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
          name="dashboardScreen"
          component={DashboardScreen}
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
                onPress={() => console.log('press')}
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
      </Stack.Navigator>
    </NavigationContainer>
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
export default App;
