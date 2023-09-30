import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <ImageBackground source={require('./../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email" 
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password" 
          secureTextEntry 
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={loginUser}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Go to Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
    backgroundColor:"white",
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default LoginScreen;
