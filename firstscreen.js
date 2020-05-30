import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { TestNotification } from './notification';

const FirstScreen = ({ navigation }) => {
    return (
        <View><TouchableNativeFeedback onPress={() => navigation.navigate('SecondScreen', {
            color:'#000000'
        })}><View><Text>This</Text></View></TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => TestNotification()}><View><Text>notify</Text></View></TouchableNativeFeedback>
        </View>)
};

export default FirstScreen