import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

    const [userDetails, setUserDetails] = useState();
    useEffect(() => {
      getUserData();
    }, []);
  
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('userInfo');
      if (userData) {
        setUserDetails(JSON.parse(userData));
      }
    };
  
    const logout = () => {
      AsyncStorage.setItem(
        'userInfo',
        JSON.stringify({...userDetails, loggedIn: false}),
      );
      navigation.navigate('Login');
    };



  return (
    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
      HOME    "logout button to be added in the side drawer"
    </Text>
    <Button title="Logout" onPress={logout} />
  </View>
  )
}