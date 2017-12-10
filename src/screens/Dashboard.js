import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import NavHeader from '../components/header';
import ContentCards from '../components/cards';
import { Font } from 'expo';


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
            <View>
            <Container>
          {
            this.state.fontLoaded ? (
              <Container>
              <NavHeader/>
              <Container>
              <Header />
              <Content />
              <Footer>
                <FooterTab>
                  <Button>
                    <Text>Apps</Text>
                  </Button>
                  <Button>
                    <Text>Camera</Text>
                  </Button>
                  <Button active>
                    <Text>Navigate</Text>
                  </Button>
                  <Button>
                    <Text>Contact</Text>
                  </Button>
                </FooterTab>
              </Footer>
            </Container>
            </Container>
            ) : null
                    }   
            </Container>
            </View>

        )
  }
}
