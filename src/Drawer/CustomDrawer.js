import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CustomDrawer(props) {



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
          props.navigation.navigate("Login")
        );
      };

  return (
    <View style={{flex:1}} >
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    
    <View>
        <Button title="Logout"  buttonStyle={{ backgroundColor: '#1A5276' }} onPress={logout} ></Button>
    </View>
    </View>
  )
}