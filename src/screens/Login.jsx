import LoginScreen from 'react-native-login-screen';
import {StyleSheet, Text, TextInput, View, ScrollView,Alert} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateEmail, validatePassword } from '../Components/Validation';
import Loader from '../Components/Loader';


export const goToNext = async (name, email, userId) => {
  await AsyncStorage.setItem('NAME', name);
  await AsyncStorage.setItem('EMAIL', email);
  await AsyncStorage.setItem('USERID', userId);
};


const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [visible, setVisible] = useState(false);

  
  const loginUser = () => {
    setVisible(true);
    firestore()
      .collection('Users')
      .where('email', '==', username)
      .get()
      .then(res => {
        setVisible(false);
        if (res.docs != []) {
          if(res.docs[0].data().password == password){
          goToNext(
            res.docs[0].data().name,
            res.docs[0].data().email,
            res.docs[0].data().userId,
          );
          navigation.reset({index: 0, routes: [{ name: 'Main' }]})

        }
        else{
          Alert.alert('Incorrect Password');
        }
        } else {
          Alert.alert('User not found');
        }
      })
      .catch(error => {
        setVisible(false);
        console.log(error);
        Alert.alert('User not found');
      });
  };

  const handleSubmit = () => {
    setEmailError('');
    setPasswordError('');
    if (!validateEmail(username)) {
      setEmailError('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    loginUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <LoginScreen
          logoImageSource={require('../assets/lazytrunk.png')}
          logoImageStyle={styles.logo}
          onLoginPress={() => {handleSubmit()}}
          onSignupPress={() => {
            console.log('Account is created');
            navigation.navigate('Signup');
          }}
          disableEmailValidation
          textInputChildren={
            <View style={styles.errorBox} >
              {emailError && <Text style={styles.errorText}>{emailError}</Text>}
              {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
              )}
            </View>
          }
          onEmailChange={setUsername}
          loginButtonText={'Login'}
          disableSignup={false}
          onPasswordChange={setPassword}
          style={styles.logincontainer}
        />
      </ScrollView>
      <Loader visible={visible} />
    </SafeAreaView>
  );
};

export default Login;

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
  logincontainer: {
    backgroundColor: '#ffffff',
    padding: 100,
    paddingTop: 50,
  },
  errorText: {
    position:'relative',
    top:10,
    color: 'red',
    textAlign: 'center',
  }
});


