import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {TestNotification} from './notification';

const SampleScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <View>
          <Text>Loading</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TestNotification()}>
        <View>
          <Text>notify</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SampleScreen;
