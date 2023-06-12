import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Register from './src/Register';
import Home from './src/Home';
import HealthAndWellNess from './src/Drawer/healthAndWellness';
import HealthAssessment from './src/Drawer/HealthAssessment';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './src/Styles/Styles';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HealthAndWellness from './src/Drawer/HealthAndWellness';
import ProviderDirectory from './src/Drawer/ProviderDirectory';
import Services from './src/Drawer/Services';




export default function App() {


  const [initialRouteName, setInitialRouteName] = useState('');

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="HealthAndWellness" component={HealthAndWellness} />
        <Drawer.Screen name="ProviderDirectory" component={ProviderDirectory} />
        <Drawer.Screen name="Services" component={Services} />
          <Stack.Screen name='Health' component={HealthAndWellNess} />
        <Stack.Screen name='Bmi' component={HealthAssessment} />
      </Drawer.Navigator>
    );
  }


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
    
  <SafeAreaView style={Styles.container} >
    <NavigationContainer>

      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          options={{
            headerShown: false
          }} 
          name="Login" component={Login} />
        <Stack.Screen
        options={{
          title:"Login"
        }}
        
        name="Register" component={Register} />
        <Stack.Screen 
            options={{
              headerShown: false
            }}  
              component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  );
}

