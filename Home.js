import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const Home = ({navigation}) => {
  return (
    <View>
      {/* <Text>Home</Text> */}
      <Button title='general enquiry' onPress={()=>navigation.navigate('General Enquiry')} />
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})