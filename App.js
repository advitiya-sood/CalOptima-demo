import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Register from './src/Register';
import Home from './src/Home';



export default function App() {


  const [initialRouteName, setInitialRouteName] = useState('');
  const Stack = createStackNavigator();


  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userInfo) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('Home');
        } else {
          setInitialRouteName('Login');
        }
      } 
    } catch (error) {
      setInitialRouteName('Registration');
    }
  };


  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen 
            options={{
               headerShown: false
             }}  
        name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

