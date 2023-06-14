import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SliderBox } from "react-native-image-slider-box";



export default function Home() {

  const images=[
    require("../assets/images/img1.jpg"),
    require('../assets/images/img2.jpg'),
    require('../assets/images/img3.jpg'),
    require('../assets/images/img4.jpg')

  ]
return (
<View style={styles.container}>
  <View>
  <SliderBox  images={images} autoplay={true} />
</View>
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