import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import LoginScreen from 'react-native-login-screen';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../Components/Validation';
const usersCollection = firestore().collection('Users');

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const registerUser = () => {
    const userId = uuid.v4();
    usersCollection
      .doc(userId)
      .set({
        name: name,
        email: username,
        password: password,
        userId: userId,
      })
      .then(res => {
        console.log('User created');
        setSuccessMessage("Registration Successfull ! Please Login to Continue")
        setTimeout(() => {
          navigation.navigate('Login')
        }, 4000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    setEmailError('');
    setNameError('');
    setPasswordError('');
    if (!validateEmail(username)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    if (!validateName(name)) {
      setNameError('Name is required');
      return;
    }
    registerUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <LoginScreen
          logoImageSource={require('../assets/lazytrunk.png')}
          logoImageStyle={styles.logo}
          disableEmailValidation
          onLoginPress={() => {
            handleSubmit();
          }}
          onSignupPress={() => {
            navigation.goBack();
          }}
          textInputChildren={
            <View>
              <View style={styles.name}>
                <TextInput
                  style={styles.nameText}
                  placeholder="Name"
                  placeholderTextColor={'grey'}
                  onChangeText={setName}
                />
              </View>
              {emailError && <Text style={styles.errorText}>{emailError}</Text>}
              {nameError && <Text style={styles.errorText}>{nameError}</Text>}
              {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
              )}
              {successMessage && (
                <Text style={styles.succesText}>{successMessage}</Text>
              )}
            </View>
          }
          signupText={'Login'}
          onEmailChange={setUsername}
          loginButtonText={'Sign Up'}
          disableSignup={false}
          onPasswordChange={setPassword}
          style={styles.Signupcontainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  logo: {
    height: '20%',
    width: '40%',
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollview: {
    paddingBottom: 20,
  },
  Signupcontainer: {
    backgroundColor: '#ffffff',
    padding: 100,
    paddingTop: 50,
  },
  name: {
    marginTop: 16,
    borderColor: 'black',
    width: 1,
    backgroundColor: '#ECEFF6',
    width: 325,
    borderRadius: 10,
    padding: 4,
  },
  nameText: {
    color: 'black',
    paddingLeft: 15,
  },
  errorText: {
    position:'relative',
    top:10,
    color: 'red',
    textAlign: 'center',
  },
  succesText:{
    position:'relative',
    top:10,
    color: '#136A2C',
    textAlign: 'center',
  }
});
