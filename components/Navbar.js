import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarHeader}>
        SWEPT!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#00293c',
    display: 'flex',
    alignSelf: 'stretch',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingBottom: 20,
  },
  navbarHeader: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    fontStyle: 'italic',
  }
})