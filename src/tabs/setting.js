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
import { goToNext } from '../screens/Login';

const Setting = () => {
  const Navigation = useNavigation();
  const [mode, setMode] = useState('LIGHT');
  const isFocued = useIsFocused();
  const changeMode = async x => {
    await AsyncStorage.setItem('MODE', x);
  };
  useEffect(() => {
    getMode();
  }, [isFocued]);
  const getMode = async () => {
    setMode(await AsyncStorage.getItem('MODE'));
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: mode == 'LIGHT' ? 'white' : '#212121'},
      ]}>
      <View style={styles.themChangeView}>
        <Text style={{color: mode == 'LIGHT' ? 'black' : 'white'}}>
          Change Mode
        </Text>
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: mode == 'LIGHT' ? 'black' : 'white'},
          ]}
          onPress={() => {
            setMode(mode == 'LIGHT' ? 'DARK' : 'LIGHT');
            changeMode(mode == 'LIGHT' ? 'DARK' : 'LIGHT');
          }}>
          <Text style={{color: mode == 'LIGHT' ? 'white' : 'black'}}>
            Dark Mode
          </Text>
        </TouchableOpacity>
      </View>
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
    alignItems:'center'
  },
  themChangeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
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
    top:'50%',
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
