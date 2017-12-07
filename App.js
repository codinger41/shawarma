import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';

import Dashboard from './src/screens/Dashboard';

const App = StackNavigator({
  Login: {screen: Login},
  Dashboard: {screen: Dashboard},
  
},
{
  headerMode: 'none'
});

export default App;