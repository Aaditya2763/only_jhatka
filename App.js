// // import Liberry
// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNaviagtion from './src/navigation/StackNavigation/stackNavigation';
// import BottomNaviagtion from './src/navigation/BottomNavigation/bottomNavigation';
// import Item from './src/screens/itempages/item';
// import SplashScreen from './src/screens/splashScreen';
// import { createNativeStackNavigator  } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';

// // create a component
// const Stack = createNativeStackNavigator();
// enableScreens(true);
// // if you want to switch Stack navigation change const isLogin = false;
// const isLogin = true;
// // const Loading = () => {};
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
        
//         {ShowSplashScreen ? (
//           <Stack.Screen
//             name="splashScreen"
//             component={SplashScreen}
//             options={{headerShown: false}}
//           />
//         ) : null}
//          {/* <Stack.Screen
//           name="dashboardScreen"
         
//           component={DashboardScreen}
//           options={{headerShown: false}}
//         /> */}
//         {/* <Stack.Screen
//         name="item"
//           component={Item}
//           options={{headerShown: false}}
//         /> */}
        
//        {/* <Stack.Screen
//           name="setDeleveryLoactionScreen"
//           component={SetDelveryLoactionScreen}
//           options={({navigation}) => ({
//             headerTransparent: true,
//             title: 'Set Location',
//             headerTitleAlign: 'center',
//             headerTitleStyle: {
//               fontFamily: 'Poppins-Medium',
//               fontWeight: '600',
//               fontSize: 20,
//               color: Color.dark,
//             },
//             headerRight: () => (
//               <IconButton
//                 onPress={() => console.log('press')}
//                 source={SearchButton}
//                 style={styles.iconSize}
//               />
//             ),
//             headerLeft: () => (
//               <IconButton
//                 onPress={() => navigation.goBack()}
//                 source={BackButton}
//               />
//             ),
//           })}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// //make this component available to the app
// export default App;
