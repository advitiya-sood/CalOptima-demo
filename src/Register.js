import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

export default function Register({navigation}) {


  const [errors,setErrors]=useState({})
  const [userForm,setUserForm]=useState({
    MemberId:"",
    UserName:"",
    Email:"",
    BirthDate:"",
    Mobile:"",
    Password:""
  })



  const validate = () => {
    let isValid = true;

    if (!userForm.Email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!userForm.Email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!userForm.UserName) {
      handleError('Please input Name', 'name');
      isValid = false;
    }
    if (!userForm.MemberId) {
      handleError('Please input MemberID', 'memberId');
      isValid = false;
    }

    if (!userForm.Mobile) {
      handleError('Please input phone number', 'mobile');
      isValid = false;
    }

    if (!userForm.Password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (userForm.Password.length < 5) {
      handleError('Min password length of 5', 'password');
      isValid = false;
    }

    if (isValid) {
      handleRegister();
    }
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };


    const handleRegister = () => {
    
        AsyncStorage.setItem('userInfo',JSON.stringify(userForm))
        alert('Registration successful');
        navigation.navigate('Login');
      };

      const handleLogin = () => {
        navigation.navigate('Login');
      };

  return (
    <View style={{flex:1}}>
    
    <View style={Styles.RegisterBox}>
    <Text style={[Styles.HeadingText,{marginTop:20}]}>Create Account</Text>

    <ScrollView 
    contentContainerStyle={{justifyContent:"center",alignItems:"center", gap:5}}
    style={{width:"100%"}}>
    

    <Input
      placeholder="Member Id"
      value={userForm.MemberId}
      onFocus={() => handleError(null, 'memberId')}
      errorMessage={errors.mobile}
      onChangeText={(text)=>setUserForm({...userForm,["MemberId"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
      />
    <Input
      placeholder="Username"
      value={userForm.UserName}
      onFocus={() => handleError(null, 'name')}
      errorMessage={errors.name}
      onChangeText={(text)=>setUserForm({...userForm,["UserName"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
      />
    <Input
      placeholder="Email"
      value={userForm.Email}
      onFocus={() => handleError(null, 'email')}
      errorMessage={errors.email}
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
        onFocus={() => handleError(null, 'mobile')}
        errorMessage={errors.mobile}
        name="Mobile"
        onChangeText={(text)=>setUserForm({...userForm,["Mobile"]:text})}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={Styles.RegisterInputStyle}
        />
    
    <Input
      placeholder="Password"
      secureTextEntry={true}
      value={userForm.Password}
      onFocus={() => handleError(null, 'password')}
      errorMessage={errors.password}
      onChangeText={(text)=>setUserForm({...userForm,["Password"]:text})}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={Styles.RegisterInputStyle}
      />


</ScrollView>
    <Button
      title="Sign Up"
      onPress={validate}
      buttonStyle={{ backgroundColor: '#1A5276' }}
      containerStyle={{width: '50%', marginBottom: 10,borderRadius:50} }
      />

  </View>

    <HideWithKeyboard>
    <Text  style={Styles.BelowText}
    onPress={handleLogin}
    >Alread have an account? <Text style={{color:"#1A5276"}} >Login</Text></Text>
    </HideWithKeyboard>

</View>
  )
}