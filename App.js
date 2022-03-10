import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Navbar from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b5def2',
  },
});
