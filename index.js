/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// for tetsing purpose
import Practice from './practice';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Practice);
