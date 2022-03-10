import { Container, Content, Header, Left, Body, Icon } from 'native-base';

export default function Home() {
  return (
    <Container>
      <Content contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Home Component</Text>
      </Content>
    </Container>
  );
};