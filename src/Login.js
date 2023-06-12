import React, { useState } from 'react';
import { View, Text, Alert  } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Styles } from './Styles/Styles';

export default function Login({navigation}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
          Alert.alert('Login successful');
          navigation.navigate('Home');
          // navigation.navigate('Health');  // change when dashboard created.
        } else {
          Alert.alert('Invalid credentials');
        }
      };

      const handleRegister = () => {
        navigation.navigate('Register');
      };

  return (
    <View style={Styles.LoginBox}>
      <Text style={Styles.HeadingText}>Login </Text>
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
        title="Login"
        onPress={handleLogin}
        buttonStyle={{ backgroundColor: '#e74c3c' }}
        containerStyle={{ width: '60%', marginBottom: 10 }}
      />
        <Text  style={{color:"blue", padding:10}}
        onPress={handleRegister}

        >Click Here to Register</Text>
      
    </View>
  )
}