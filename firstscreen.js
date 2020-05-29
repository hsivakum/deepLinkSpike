import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';


const FirstScreen = ({ navigation }) => {
    return (
       <View><TouchableNativeFeedback onPress={() => navigation.navigate('SecondScreen')}><View><Text>This</Text></View></TouchableNativeFeedback></View>)
};

export default FirstScreen