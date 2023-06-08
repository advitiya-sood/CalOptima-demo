import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Services = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.textStyle}>Services</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:30
    }
})

export default Services