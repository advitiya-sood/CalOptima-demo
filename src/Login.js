import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, ScrollView  } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HideWithKeyboard from 'react-native-hide-with-keyboard';


export default function Login({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors,setErrors]=useState({})


    const validate = async () => {
      let isValid = true;
      if (!username) {
        handleError('Please input email', 'email');
        isValid = false;
      }
      if (!password) {
        handleError('Please input password', 'password');
        isValid = false;
      }
      if (isValid) {
        handleLogin();
      }
    };

    const handleLogin = async() => {
        let data= await  AsyncStorage.getItem('userInfo')
        if(data){
          userData=JSON.parse(data)

          if(userData.Email==username && userData.Password == password){
            AsyncStorage.setItem(
              'userInfo',
              JSON.stringify({...userData, loggedIn: true}),
            );
            Alert.alert('Login successful');
            navigation.navigate('Drawer', { screen: 'Home' });
          }else {
            Alert.alert('Invalid credentials');}
        }
      };

      const handleRegister = () => {
        navigation.navigate('Register');
      };

      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      };

  return (
    <KeyboardAvoidingView behavior="height" style={{flex:1}}>
    <View style={{flex:1}}>
      <View  style={Styles.TopCircle} />

      <View style={{width:"100%",marginLeft:40,marginTop:50}} >
    <Text style={{fontSize:30,fontWeight:"500"}}>Welcome!</Text>
    <Text style={Styles.HeadingText}>Login </Text>
      </View>

    <ScrollView contentContainerStyle={{justifyContent:"center",alignItems:"center", gap:5}}
    style={{width:"100%",marginTop:40}} >
      <Input
        placeholder="Email"
        value={username}
        onFocus={() => handleError(null, 'email')}
        errorMessage={errors.email}
        onChangeText={(text) => setUsername(text)}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={{ width: '85%', marginBottom: 20 }}
        />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onFocus={() => handleError(null, 'password')}
        errorMessage={errors.password}
        onChangeText={(text) => setPassword(text)}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={{ width: '85%', marginBottom: 30 }}
        />
      <Button
        title="Login"
        onPress={validate}
        buttonStyle={{ backgroundColor: '#1A5276' }}
        containerStyle={{ width: '50%', marginBottom: 10,borderRadius:50 }}
        />
    </ScrollView >
    
    <HideWithKeyboard>
    <Text  style={Styles.BelowText}
        onPress={handleRegister}
        >Dont have an account? <Text style={{color:"#1A5276"}} >Register</Text></Text>
    </HideWithKeyboard>
  </View>
  </KeyboardAvoidingView>
  )
}