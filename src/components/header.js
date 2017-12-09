import React, { Component } from 'react';
import {Container, Header, Title, Button, Icon} from 'native-base';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';

export default class NavHeader extends Component {
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

            <Container style={styles.navContainer} >
          {
             this.state.fontLoaded ? (
                 <Header style={styles.header} >
                    <Title style={styles.title} >Dashboard</Title>
                </Header>
            ) : null
                    }
            </Container>

        )
    }
}


const styles = StyleSheet.create({
    title: {
        marginTop: 15,
        width: 160,
        textAlign: 'center',
        fontSize: 35
    },
    navContainer: {
        marginTop: 20,
        backgroundColor: '#A1887F'
    },
    header: {
        backgroundColor: '#5D4037'
    },
});