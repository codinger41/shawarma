import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Image } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';


export default class ContentCards extends Component {
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
                <View>
                <Image source={require('../images/logo.png')} />
                </View>
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
       backgroundColor: '#A1887F',
       height: 60
   },
   header: {
       backgroundColor: '#5D4037'
   },
});