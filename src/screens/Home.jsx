import React from 'react';
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/lazy-trunk-background.jpeg')}
          style={styles.imageBackground}>
          <View style={styles.screenComponents}>
            <Image
              source={require('../assets/never-have-i-ever.png')}
              style={styles.logo}
            />
            {/* Buttons */}
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate("Welcome")
              }}>
              <Image
                source={require('../assets/play-button.jpeg')}
                style={styles.buttonImage}
              />
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                /* Handle Follow Us */
              }}>
              <Image
                source={require('../assets/multiplayer-button.jpeg')}
                style={styles.buttonImage}
              />
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => {
                /* Handle How to Play */
              }}>
              <Image
                source={require('../assets/how-to-play-button.jpeg')}
                style={styles.buttonImage}
              />
            </Pressable>

            {/* Follow Us & More Games */}
            <View style={styles.bottomButtonsContainer}>
              <View style={styles.followUsContainer}>
              <Image
                source={require('../assets/rocket.png')}
                style={styles.followUsIcon}
              />
              <Text style={styles.followUsText}>FOLLOW US</Text>
              </View>
              <View style={styles.moreGamesContainer}>
              <Image
                source={require('../assets/Pacman-icon.png')}
                style={styles.moreGamesIcon}
              />
              <Text style={styles.moreGamesText}>MORE GAMES</Text>
              </View>
            </View>
          </View>
           {/* Settings Icon */}
           <View style={styles.topIconContainer}>
           <Pressable onPress={() => {
            navigation.push('Settings')
           }}>
              <Image
                source={require('../assets/settings-icon.png')}
                style={styles.topIcon}
              />
            </Pressable>
            </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    overflow:'hidden',
    backgroundColor:'#0D1117'
  },
  imageBackground: {
    height:responsiveHeight(99)
  },
  screenComponents: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  logo: {
    width: 200,
    height: responsiveHeight(30),
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: 'black',
    marginTop: 20, // Add margin between buttons
    borderRadius:10,
    elevation: 5, // Adjust the elevation value as needed
    shadowColor: '#000000', // Ensure dark shadow for contrast
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    borderRadius:10,
  },

  topIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  topIcon: {
    width: 40,
    height: 40,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: 50,
    width:'100%',
    padding:20,
    marginBottom:50
  },

  followUsContainer:{
    flexDirection:'row',
    alignItems:'center'
  },

  moreGamesContainer:{
    flexDirection:'row',
    alignItems:'center'
  },

  followUsText: {
    borderColor:'white',
    fontSize:9,
    borderWidth:1,
    borderRadius:20,
    padding:3.5,
    color:'white',
    backgroundColor:'#001C37',
    marginLeft:5,
    textAlign:'center',
    height: 24,
    fontWeight:'700'
  },
  moreGamesText: {
    borderColor:'white',
    fontSize:9,
    borderWidth:1,
    borderRadius:20,
    padding:3.5,
    color:'white',
    fontWeight:'700',
    backgroundColor:'#001C37',
    marginLeft:5,
    textAlign:'center',
    height: 24,

  },
  followUsIcon: {
    width: 30,
    height: 30,
  },
  moreGamesIcon: {
    width: 25,
    height: 25,
  },
});

export default Home;
