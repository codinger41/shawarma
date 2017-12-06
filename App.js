import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import AdminLogin from './src/screens/AdminLogin';

export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator style={styles.nav}/>
    );
  }
}

const AppDrawerNavigator = DrawerNavigator({
  Login: {screen: Login},
  SignUp: {screen: Signup},
  Administration: {screen: AdminLogin}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    backgroundColor: '#5D4037',
    paddingTop: 40
  }
});
