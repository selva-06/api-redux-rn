/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const RootComponent = () => (
  <GestureHandlerRootView>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootComponent);
