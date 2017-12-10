import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Font } from 'expo';
import { StyleSheet,  View } from 'react-native';

export default class FooterTabs extends Component {

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

        <View style={styles.down} >
          {
             this.state.fontLoaded ? (
                   
                    <Footer>
                        <FooterTab  style={styles.container}>
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
            ) : null
                    }
            </View>
        )
  }
}
const styles =  StyleSheet.create({
    container:{
        backgroundColor: '#5D4037',
    },
    down:  {
        flex: 1,
    }
})