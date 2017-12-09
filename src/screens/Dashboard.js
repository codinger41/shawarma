import React, { Component } from 'react';
import { StyleSheet, View, Image,  Text, KeyboardAvoidingView} from 'react-native';
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import NavHeader from '../components/header';

export default class Dashboard extends Component {
  render() {
    return(
      <NavHeader/>
    )
  }
}
