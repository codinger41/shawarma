import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login'

export default class App extends Component {
  render() {
    return (
     <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
