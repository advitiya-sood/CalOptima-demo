import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home'
import HealthWellness from './HealthWellness'
import ProviderDirectory from './ProviderDirectory'
import Services from './Services'

const Drawer = createDrawerNavigator()


const Sidebar = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen 
                key='home'
                name='Home'
                component={Home} 
            />
            <Drawer.Screen 
                key='healthwellness'
                name='Health & Wellness'
                component={HealthWellness}
            />
             <Drawer.Screen 
                key='providerdirectory'
                name='Provider Directory'
                component={ProviderDirectory}
            />
             <Drawer.Screen 
                key='services'
                name='Services'
                component={Services}
            />
            

        </Drawer.Navigator>
    </NavigationContainer>

  )
}

export default Sidebar