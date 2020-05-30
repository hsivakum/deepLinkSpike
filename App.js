import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './firstscreen'
import SecondScreen from './SecondScreen';
import SampleScreen from './sample'
import PushNotification from 'react-native-push-notification'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen,
    path: 'firstscreen'
  }, SecondScreen: {
    screen: SecondScreen,
    path: 'secondscreen/:color'
  }
})
const MainNavigator = createSwitchNavigator({
  InitialScreen: {
    screen: SampleScreen,
    path: 'loading'
    
  },
  HomeStack: {
    screen: AppStackNavigator,
    path: 'home'
  }
  
},{
  initialRouteName: 'InitialScreen'
}
);
const AppContainer = createAppContainer(MainNavigator);
const App = () => {
  const prefix = 'deeplinkspike://';

  return <AppContainer uriPrefix={prefix}/>
};

export default App;