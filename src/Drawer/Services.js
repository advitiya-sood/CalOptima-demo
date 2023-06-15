import { View, Text, ScrollView, Pressable, Alert } from 'react-native'
import React from 'react'
import { Tile } from '@rneui/themed'

export default function Services({navigation}) {


    const services=[
      {
        id:1,
        title:"General Enquiry",
        color:"#2980B9"
      },
      {
        id:2,
        title:"Service5",
        color:"#F8C471"
      },
      {
        id:3,
        title:"Service2",
        color:"#717D7E"
      },
      {
        id:4,
        title:"Service3",
        color:"#AF7AC5"
      }
    ]


  return (
    <View  style={{ alignItems: 'center' }}>
    <ScrollView style={{ paddingVertical: 10,width:"100%" }} contentContainerStyle={{alignItems: 'center'}} >
      {
        services.map((service)=><Tile
        key={service.id}
        title={service.title}
        titleStyle={{ fontSize: 25,fontWeight:"bold"}}
        imageContainerStyle={{borderRadius:12,borderColor:"black",borderWidth:1,backgroundColor:service.color}}
        containerStyle={{marginTop:15}}
        featured
        activeOpacity={5}
        width={350}
        height={130}
        onPress={()=>{navigation.navigate(service.title)}}
        />)
      }
</ScrollView>
    </View>
  )
}