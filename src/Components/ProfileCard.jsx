import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileCard = ({ name, profileIcon, email }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'white',width:'90%', borderRadius:20, elevation:5,maxHeight:'50%'}}>
      <View style={styles.profileIcon}>
      <Text style={{fontSize:20, color:'white'}}>{profileIcon}</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>{name}</Text>
      <Text style={{ fontSize: 16, color:'black' }}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcon:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    width:40,
    height:40,
    borderRadius:20,
    margin:10
  },
})

export default ProfileCard;