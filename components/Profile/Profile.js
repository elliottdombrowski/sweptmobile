import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Profile extends Component {
  render () {
    return (
      <Container>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>Profile Component</Text>
        </Content>
      </Container>
    );
  }
};