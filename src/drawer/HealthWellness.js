import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HealthWellness = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.textStyle}>Health & Wellness</Text>
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

export default HealthWellness