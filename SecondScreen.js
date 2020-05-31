import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Linking,
  TouchableOpacity,
} from 'react-native';

const SecondScreen = ({navigation}) => {
  const color = navigation.getParam('color', 1);
  const handleOpenURL = (event) => {
    console.log(event.url);
    const route = event.url.replace(/.*?:\/\//g, '');
    console.log(route);
  };
  useEffect(() => {
    Linking.addEventListener('url', handleOpenURL);
    return () => {
      Linking.removeEventListener('url', handleOpenURL);
    };
  });

  return (
    <View
      style={{
        backgroundColor: color,
      }}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <View>
          <Text>This</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;
