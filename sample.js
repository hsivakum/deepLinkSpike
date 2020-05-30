import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import { TestNotification } from './notification';

const SampleScreen = ({ navigation }) => {
    return (
        <View><TouchableNativeFeedback onPress={() => navigation.navigate('HomeStack')}><View><Text>Loading</Text></View></TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => TestNotification()}><View><Text>notify</Text></View></TouchableNativeFeedback>
        </View>)
};

export default SampleScreen