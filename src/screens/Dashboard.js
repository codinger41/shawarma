import React, { Component } from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import NavHeader from '../components/header';
import ContentCards from '../components/cards';
import { Font } from 'expo';
import Products from '../components/products';

export default class Dashboard extends Component {
  //checking state for if font is loaded or not.
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    //Setting the state to true when font is loaded.
    this.setState({ fontLoaded: true });
}

  render() {
    return (
            <Container>
          {
            this.state.fontLoaded ? (
            <Container>
            <StatusBar
              barStyle="light-content"
            />
              <Container>
                <Header style={styles.header}>
                  <Title style={styles.title}>Dashboard</Title>
                </Header>
              </Container>
              <Products/>
              <Footer>
                <FooterTab  style={styles.footer}>
                  <Button>
                    <Text>All products</Text>
                  </Button>                                                                                                                                                                                                    
                  <Button>
                    <Text>Sales</Text>
                  </Button>
                  <Button active>
                    <Text>New Product</Text>
                  </Button>
                  <Button>
                    <Text>Settings</Text>
                  </Button>
                </FooterTab>
              </Footer>
            </Container>
            ) : null
                    }   
            </Container>
            

        )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    backgroundColor: '#5D4037',
    height: 60,
  },
  title: {
    marginTop: 15,
    width: 180,
    textAlign: 'center',
    fontSize: 40,
  },
  footer: {
    backgroundColor: '#5D4037',
  }
})