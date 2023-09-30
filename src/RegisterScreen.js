import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;

      await firestore()
        .collection('users')
        .doc(uid)
        .set({
          username: username,
          diamonds: 100 // Varsayılan elmas sayısı
        });

      navigation.navigate('Home');
    } catch (error) {
      console.log('Register Error:', error);
    }
  };

  return (
    <ImageBackground source={require('./../assets/background.png')} style={styles.backgroundImage}>
      <View style={styles.background}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <Button title="Register" onPress={registerUser} />
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },

});