import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {TestNotification} from './notification';

const FirstScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SecondScreen', {
            color: '#000000',
          })
        }>
        <View>
          <Text>This</Text>
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

export default FirstScreen;
