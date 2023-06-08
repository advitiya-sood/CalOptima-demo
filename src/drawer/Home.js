import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Home = () => {
    const images=[
        require('../../assets/images/img1.jpg'),
        require('../../assets/images/img2.jpg'),
        require('../../assets/images/img3.jpg')
      ]
  return (
    <View style={styles.container}>
      <View>
      <SliderBox images={images} autoplay={true} />
    </View>
    {/* <Text style={styles.textStyle}>Home</Text> */}
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

export default Home