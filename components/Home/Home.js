import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Home extends Component {
  render () {
    return (
      <NativeBaseProvider>
        <Container>
          <Content contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>Home Component</Text>
          </Content>
        </Container>
      </NativeBaseProvider>
    );
  };
};