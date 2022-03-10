import { Container, Content, Header, Left, Body, Icon } from 'native-base';

export default function Profile() {
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
};