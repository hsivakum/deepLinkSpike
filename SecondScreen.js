import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

const SecondScreen = ({ navigation }) => {
    return(
       <View><TouchableNativeFeedback onPress={() => navigation.pop()}><View><Text>This</Text></View></TouchableNativeFeedback></View>)
  };

export default SecondScreen