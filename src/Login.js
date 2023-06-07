import React, { useState } from 'react';
import { View, Text, Alert  } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            navigation.navigate('Home');
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
    <View style={Styles.LoginBox}>
      <Text style={Styles.HeadingText}>Login </Text>
      <Input
        placeholder="Email"
        value={username}
        onFocus={() => handleError(null, 'email')}
        errorMessage={errors.email}
        onChangeText={(text) => setUsername(text)}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={{ width: '80%', marginBottom: 20 }}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onFocus={() => handleError(null, 'password')}
        errorMessage={errors.password}
        onChangeText={(text) => setPassword(text)}
        inputStyle={{ paddingLeft: 10 }}
        containerStyle={{ width: '80%', marginBottom: 30 }}
      />
      <Button
        title="Login"
        onPress={validate}
        buttonStyle={{ backgroundColor: '#e74c3c' }}
        containerStyle={{ width: '60%', marginBottom: 10 }}
      />
        <Text  style={{color:"blue", padding:10}}
        onPress={handleRegister}
        >Dont have an account? Register</Text>
    </View>
  )
}