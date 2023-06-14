import { StyleSheet, Text, TextInput, ScrollView, View, Button, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const ContactCustomerServiceGeneralEnquiry = ({navigation}) => {
  
  const [textInputValue, onChangeTextInput] = React.useState('');
  const [phoneChecked, setPhoneChecked] = useState(false)
  const [emailChecked, setEmailChecked] = useState(false)
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')

  return (
    <ScrollView style={styles.container}>
      <View style={{marginHorizontal:10}}>
      {/* <Text style={{fontSize:30,color:'#091865'}}>General
      Enquiry</Text> */}
      <Text style={{fontSize:20,color:'#1260e9',paddingVertical:10}}>Contact Customer Service</Text>
      <Text style={{fontSize:15, paddingBottom:40}}>To contact us online, click the link below to submit inquiries to our Customer Service department. In case of an emergency call 911 or go to the nearest emergency room, then call your PCP or Personal Care Coordinator as soon as possible.</Text>
      <Text style={{fontSize:15, fontWeight:'bold', paddingBottom:10}}>How can we help you?</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={1000}
        onChangeText={text => onChangeTextInput(text)}
        value={textInputValue}
        style={{padding: 10, borderWidth: 1, maxHeight:100}}
        placeholder='Enter comments here'
      />
      <Text style={{paddingVertical:10, textAlign:"right"}}>{1000-textInputValue.length} Characters Remaining</Text>
      <View style={{flexDirection:'row', paddingVertical: 10}}>
      <Checkbox 
      value={emailChecked} 
      onValueChange={()=>setEmailChecked(!emailChecked)}
      color={emailChecked?"#1260e9":undefined}
      />
      <Text style={{paddingHorizontal:5, fontWeight:'bold', fontSize:15}}>Email</Text>
      </View>
      {/* hello */}
      <Text style={{margin:12, fontWeight:'bold', fontSize:15}}>At what email address may we contact you?</Text>
      <TextInput
      style={{height: 40,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10}}
        // keyboardType="email-address"
        inputMode='email'
        editable={emailChecked}
      // onChangeText={onChangeText}
      // value={text}
      />
      <View style={{flexDirection:'row', paddingTop: 30, paddingBottom: 10}}>
      <Checkbox 
      value={phoneChecked} 
      onValueChange={()=>setPhoneChecked(!phoneChecked)}
      color={phoneChecked?"#1260e9":undefined}
      />
      <Text style={{paddingHorizontal:5, fontWeight:'bold', fontSize:15}}>Phone</Text>
      </View>
      <Text style={{margin:12, fontWeight:'bold', fontSize:15}}>At what phone number may we contact you?</Text>
      <TextInput
      style={{height: 40,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10}}
        keyboardType="phone-pad"
        editable={phoneChecked}
        // inputMode='numeric'
      // onChangeText={onChangeText}
      // value={text}
      />
      <TouchableOpacity style={{fontSize:15, marginTop:40,marginBottom:20,padding:15, borderWidth:1, backgroundColor:'#1260e9'}}
      onPress={()=>{
        Alert.alert('Submit', 'Are you sure ?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'OK', onPress: () => {
            Alert.alert('Form Submitted Successfully !!!')
            // navigation.goBack()
          }},
        ]);
      }}
      >
        <Text style={{textAlign:'center', color:'#fff'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{fontSize:15,marginBottom:20,padding:15, borderWidth:1}}
      onPress={()=>{
        Alert.alert('Cancel', 'Are you sure ?', [
          {
            text: 'No',
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => {
            // Alert.alert('Form Submitted Successfully !!!')
            navigation.goBack()
          }},
        ]);
      }}
      >
        <Text style={{textAlign:'center'}}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ContactCustomerServiceGeneralEnquiry

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'flex-start',
        // marginTop: '15%',
        // marginBottom: '15%',
        // marginHorizontal: '5%'
      },
})