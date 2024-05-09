import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Switch,
  Pressable,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {responsiveHeight} from 'react-native-responsive-dimensions';

const Settings = ({navigation}) => {
  let language = 'Eng (US) ';
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <ImageBackground
          source={require('../assets/lazy-trunk-background.jpeg')}
          style={styles.imageBackground}>
          {/* Top Section - Settings in Blue Banner*/}
          <View style={styles.banner}>
            <Image
              style={styles.settingsIcon}
              source={require('../assets/settings-icon.png')}
            />
            <Text style={styles.bannerText}>SETTINGS</Text>
          </View>
          <View style={styles.toptopIconsRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../assets/music-player-icon.png')} // Replace with your gift icon
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={require('../assets/info-icon.png')} // Replace with your star icon
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>

          {/* Button columns*/}
          <View style={styles.buttonColumn}>
            <Pressable style={[styles.buttonStyle, styles.languageButton]}>
              <Text style={styles.buttonText}>Languages    {language}</Text>
              <Image
                source={require('../assets/united-states-of-america-flag.png')}
                style={styles.languageIcon}
              />
              <Image
                source={require('../assets/right-arrow.png')}
                style={styles.rightArrow}
              />
            </Pressable>
            <Pressable style={[styles.buttonStyle, styles.kidsModeButton]}>
              <Image
                source={require('../assets/star-icon.png')}
                style={styles.starIcon}
              />
              <Text style={styles.buttonText}>Kid Mode      {isEnabled? 'On' : 'Off'}</Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#001529'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{marginLeft:10}}
              />
            </Pressable>
            <Pressable style={[styles.buttonStyle, styles.purchasesButton]}>
              <Image
                source={require('../assets/dollar-symbol.png')}
                style={styles.starIcon}
              />
              <Text style={styles.buttonText}>Purchases</Text>
              <Image
                source={require('../assets/right-arrow.png')}
                style={styles.rightArrow}
              />
            </Pressable>
          </View>

          {/* Button */}
          <View style={styles.bottomButtonsRow}>
            <Pressable style={styles.moreGamesButton}>
            <Image
                source={require('../assets/how-to-play-icon.png')} // Replace with your coin icon
                style={styles.consoleIcon}
              />
              <Text style={styles.moreGamesText}>More Games</Text>
            </Pressable>
            <Pressable style={styles.followUsButton}>
            <Image
                source={require('../assets/rocket.png')} // Replace with your coin icon
                style={styles.consoleIcon}
              />
              <Text style={styles.followUsButtonText}>Follow Us</Text>
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
    backgroundColor:'#0D1117'
  },
  imageBackground: {
    height: responsiveHeight(99),
  },
  banner: {
    position: 'absolute',
    top: 40,
    width: '100%',
    elevation: 2,
    shadowColor: '#000000',
    backgroundColor: '#001C37', // Replace with your desired blue color
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  bannerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    alignItems: 'center',
  },

  settingsIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: '10%',
  },
  toptopIconsRow: {
    flexDirection: 'row',
    padding: 20,
    position: 'relative',
    top: 120,
    justifyContent: 'space-between',
  },
  iconButton: {
    padding: 10,
    backgroundColor: '#001A35',
    borderRadius: 20,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  buttonColumn: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: '40%', // Adjust spacing as needed
  },
  buttonStyle: {
    backgroundColor: '#F27121', // Example button color
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 5, // Add shadow for a more prominent look
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4}, // Adjust shadow for bottom emphasis
    marginBottom:25
  },

  languageButton: {
    flexDirection: 'row',
    backgroundColor: '#9EDA3C',
    alignItems: 'center',
  },

  languageIcon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    padding: 18,
    marginLeft: 5,
  },

  rightArrow: {
    width: 14,
    height: 14,
    padding: 11,
    marginLeft: 10,
  },

  starIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  kidsModeButton: {
    flexDirection: 'row',
    backgroundColor: '#EE6E6E',
  },
  purchasesButton: {
    flexDirection: 'row',
    backgroundColor: '#3BB4B4',
    justifyContent:'center',
    alignItems:'center'
  },

  buttonText: {
    color: '#060A37',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute elements between the start/end
    alignItems: 'center', // Vertically center the content
    paddingHorizontal: 20,
    marginTop: 30, // Adjust spacing as needed
    marginBottom:30
  },
  moreGamesButton: {
    flexDirection:'row',
    backgroundColor: '#001C37', // Example Shop button color
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  moreGamesText: {
    fontSize: 16,
    color:'#ffffff',
    textAlign:'center'
  },

  consoleIcon: {
    width: 20,
    height: 20,
    marginRight:10
  },

  followUsButton: {
    flexDirection:'row',
    backgroundColor: '#001C37', // Example Shop button color
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent:'center',
    alignItems:'center',

  },
  followUsButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // ... any other styles
});

export default Settings;
