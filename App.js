import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import FirstScreen from './firstscreen'
import SecondScreen from './SecondScreen';
import { createAppContainer } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  FirstScreen: {
    screen: FirstScreen
  }, SecondScreen: {
    screen: SecondScreen
  }
})
const AppContainer = createAppContainer(MainNavigator);
const App = () => {
  return <AppContainer/>
};

export default App;