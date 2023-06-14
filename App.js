import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Register from './src/Register';
import Home from './src/Home';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { Styles } from './src/Styles/Styles';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/Drawer/CustomDrawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HealthAndWellnesss from './src/Drawer/HealthAndWellnesss';
import HealtAssessments from './src/Drawer/HealthAssessments';
import Services from './src/Drawer/Services';



export default function App() {


  const [initialRouteName, setInitialRouteName] = useState('');
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  

  function MyDrawer() {
    return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          width:"60%"
        },
      headerStyle:{
        backgroundColor:"#1A5276",
        height:60
      },
      headerTintColor:"white"
      }} 
      drawerContent={(props)=><CustomDrawer  {...props}  />}
      
      >
        <Drawer.Group>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="HealthAndWellness" component={HealthAndWellnesss} />
          <Drawer.Screen name="Services" component={Services} />          
        </Drawer.Group>
        
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
    <> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}
        screenOptions={{headerStyle:{
          backgroundColor:"#1A5276",
        },
        headerTintColor:"white"
      }}
      >
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
            name="Drawer"
            options={{
               headerShown: false
             }}  
             component={MyDrawer}
        />
        <Stack.Screen 
        name='Bmi' 
        component={HealtAssessments} />
      </Stack.Navigator>
    </NavigationContainer>

    </>
    
  );
}

