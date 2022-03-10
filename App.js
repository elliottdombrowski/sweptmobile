import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { Component } from 'react';

const MyNavigator = createDrawerNavigator({
  Home: Home,
  Profile: Profile
})

export default class App extends Component {
  render () {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>
          <Navbar />
          <StatusBar style="light" />
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5def2',
  },
});
