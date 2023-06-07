import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {

  const [userForm,setUserForm]=useState({
    MemberId:"",
    UserName:"",
    Email:"",
    BirthDate:"",
    Mobile:"",
    Password:""
  })


    const handleRegister = () => {
    
        AsyncStorage.setItem('userInfo',JSON.stringify(userForm))
        alert('Registration successful');
        navigation.navigate('Login');
      };

      const handleLogin = () => {
        navigation.navigate('Login');
      };

  return (
    <View style={Styles.RegisterBox}>
    <Text style={Styles.HeadingText}>Registration </Text>

    <Input
      placeholder="Member Id"
      value={userForm.MemberId}
      onChangeText={(text)=>setUserForm({...userForm,["MemberId"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
    />
    <Input
      placeholder="Username"
      value={userForm.UserName}
      onChangeText={(text)=>setUserForm({...userForm,["UserName"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
    />
    <Input
      placeholder="Email"
      value={userForm.Email}
      onChangeText={(text)=>setUserForm({...userForm,["Email"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
    />  
      <Input
        placeholder="Birth Date"
        value={userForm.BirthDate}
        onChangeText={(text)=>setUserForm({...userForm,["BirthDate"]:text})}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={Styles.RegisterInputStyle}
        />
      <Input
        placeholder="Mobile No."
        keyboardType="numeric"
        value={userForm.Mobile}
        name="Mobile"
        onChangeText={(text)=>setUserForm({...userForm,["Mobile"]:text})}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={Styles.RegisterInputStyle}
        />
      
    
    <Input
      placeholder="Password"
      secureTextEntry={true}
      value={userForm.Password}
      onChangeText={(text)=>setUserForm({...userForm,["Password"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
    />
    <Button
      title="Register"
      onPress={handleRegister}
      buttonStyle={{ backgroundColor: '#3498db' }}
      containerStyle={Styles.RegisterInputStyle}
    />
   <Text  style={{color:"blue", padding:10}}
        onPress={handleLogin}
        >Already have an account? Login </Text>
  </View>
  )
}