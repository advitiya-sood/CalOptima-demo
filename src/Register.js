import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';

export default function Register({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        
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
      placeholder="Username"
      value={username}
      onChangeText={(text) => setUsername(text)}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={{ width: '80%', marginBottom: 20 }}
    />
    <Input
      placeholder="Password"
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
      inputStyle={{ paddingLeft: 10 }}
      containerStyle={{ width: '80%', marginBottom: 30 }}
    />
    <Button
      title="Register"
      onPress={handleRegister}
      buttonStyle={{ backgroundColor: '#3498db' }}
      containerStyle={{ width: '60%', marginBottom: 10 }}
    />
    <Button
      title="Login"
      onPress={handleLogin}
      buttonStyle={{ backgroundColor: '#e74c3c' }}
      containerStyle={{ width: '60%' }}
    />
  </View>
  )
}