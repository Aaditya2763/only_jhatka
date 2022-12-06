/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/screens/splashScreen';
import Item from './src/screens/itempages/item';
// for tetsing purpose
// import Practice from './practice';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>Item);
