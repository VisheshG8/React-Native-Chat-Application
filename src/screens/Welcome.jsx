import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const Welcome = ({navigation}) => {

  useEffect(() => {
    setTimeout(() =>{
      navigation.replace('Login')
    },2000);

  }, [])
  

  return (
    <View style={styles.mainScreen}>
      <Text style={styles.welcomeText}>Welcome to React Native Firebase Chat</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  mainScreen:{
    height:'100%',
    backgroundColor:'#111182',
    justifyContent:'center',
    alignItems:'center'

  },
  welcomeText:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:24,
    fontWeight:'700'
  }
})