import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import { goToNext } from './Login';
import {useRoute} from '@react-navigation/native';
import ProfileCard from '../Components/ProfileCard';

const Setting = () => {
  const Navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: 'white'},
      ]}>
        <ProfileCard name={route.params.name} profileIcon={route.params.userIcon} email={route.params.email}/>
      <Pressable  onPress={() => {goToNext('','',''); Navigation.replace('Home')}}  style={styles.button}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop:'20%',
    paddingBottom:'20%',
    justifyContent:'center'
  },
  btn: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    position:'absolute',
    top:'70%',
    width: 120,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', // Example button color
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 5, // Add shadow for a more prominent look
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4}, // Adjust shadow for bottom emphasis
    marginBottom:25
  },
  logoutText:{
    color:'white',
    fontWeight:'800'
  }
});
