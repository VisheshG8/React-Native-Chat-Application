import {StyleSheet, Text, View} from 'react-native';
import AppNavigation from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';


export default function  App() {

  return (
    <NavigationContainer>
    <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
