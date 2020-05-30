import React,{ useEffect } from 'react';
import { View, Text, TouchableNativeFeedback, Linking } from 'react-native';

const SecondScreen = ({ navigation }) => {
  const color = navigation.getParam('color',1)
  const handleOpenURL=(event)=>{
    console.log(event.url);
    const route = e.url.replace(/.*?:\/\//g, '');
    // do something with the url, in our case navigate(route)
    console.warn(route)
  }
  useEffect(()=>{
    Linking.addEventListener('url',handleOpenURL);
    return ()=>{
    Linking.removeEventListener('url',handleOpenURL);
    }

  }) 

    return(
       <View
        style={{
          backgroundColor:color
        }}      
      ><TouchableNativeFeedback onPress={() => navigation.pop()}><View><Text>This</Text></View></TouchableNativeFeedback></View>)
  };

export default SecondScreen