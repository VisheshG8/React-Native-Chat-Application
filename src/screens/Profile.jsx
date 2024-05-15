import {
  View,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {goToNext} from './Login';
import {useRoute} from '@react-navigation/native';
import ProfileCard from '../Components/ProfileCard';

const Setting = () => {
  const Navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={[styles.container, {backgroundColor: '#111B21'}]}>
      <ProfileCard
        name={route.params.name}
        profileIcon={route.params.userIcon}
        email={route.params.email}
      />
      <Pressable
        onPress={() => {
          goToNext('', '', '');
          Navigation.replace('Home');
        }}
        style={styles.button}>
        <Image
          source={require('../assets/logout.png')}
          style={styles.logoutIcon}
        />
      </Pressable>
    </View>
  );
};

export default Setting;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '20%',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    top: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171845', // Example button color
    borderRadius: 20,
    elevation: 5, // Add shadow for a more prominent look
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4}, // Adjust shadow for bottom emphasis
  },
  logoutIcon: {
    width: 40,
    height: 40,
  },
});
