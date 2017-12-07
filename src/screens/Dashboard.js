import React, { Component } from 'react';
import { StyleSheet, View, Image,  Text, KeyboardAvoidingView} from 'react-native';
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationComponent } from 'react-native-material-bottom-navigation'

export default class Dashboard extends Component {
    static navigationOptions = {
      tabBarLabel: 'Movies & TV',
      tabBarIcon: () => (<Icon size={24} color="white" name="tv" />)
    }
   
    render() { 
        return (
          <View>
         <Text> WOW! </Text>
          </View>
        )
        
    }
  }
   
  class Music extends Component {
    static navigationOptions = {
      tabBarLabel: 'Music',
      tabBarIcon: () => (<Icon size={24} color="white" name="music-note" />)
    }
   
    render() { 
      return (
        <View>
       <Text> WOW! </Text>
        </View>
      )
      
  }
  }
   
  class Newsstand extends Component {
    static navigationOptions = {
      tabBarLabel: 'Newsstand',
      tabBarIcon: () => (<Icon size={24} color="white" name="Newsstand" />)
    }
   
    render() { 
      return (
        <View>
       <Text> WOW! </Text>
        </View>
      )
      
  }
  }
   
  const MyApp = TabNavigator({
    Dashboard: { screen: Dashboard },
    Music: { screen: Music },
    Newsstand: { screen: Newsstand }
  }, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: 'white',
        rippleColor: 'white',
        tabs: {
          Dashboard: {
            barBackgroundColor: '#37474F'
          },
          Music: {
            barBackgroundColor: '#00796B'
          },
          Newsstand: {
            barBackgroundColor: '#EEEEEE',
            labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
            activeLabelColor: '#212121',
            activeIcon: <Icon size={24} color="#212121" name="newsstand" />
          }
        }
      }
    }
  })