import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import React, { useEffect } from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Chat from '../screens/Chat';
import Main from '../screens/Main';
import Splash from '../screens/Splash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
const Stack = createNativeStackNavigator();


const AppNavigation = () => {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [initialRoute, setInitialRoute] = useState(null);

  const checkUserId = async () => {
    let userId = await AsyncStorage.getItem('USERID');
    if (userId) {
      setInitialRoute('Main');
    } else {
      setInitialRoute('Home');
    }
    setIsLoading(false); // Set loading to false after user ID check
  };

  useEffect(() => {
    checkUserId();
  }, []);

  if (isLoading) {
    return <Splash />; // Display loading screen while checking user ID
  }

    return (
    <Stack.Navigator initialRouteName={initialRoute}
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
        headerBackTitleVisible: false,
      }} >

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />  
     <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />  
        <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />     
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />       
        <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />         
        <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />       
    </Stack.Navigator>

  );
};

export default AppNavigation;
