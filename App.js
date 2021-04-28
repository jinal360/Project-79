import React from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';
import SignUpLoginScreen from './screen/SignUpLoginScreen'
import Homescreen from './screen/Homescreen'
import ExchangeScreen from './screen/ExchangeScreen'
import db from './config';
import firebase from 'firebase';

export default class App extends React.Component {
  render(){
    return(
    <View>
<SignUpLoginScreen/>
    </View>
      )
       }
}

const TabNavigator = createBottomTabNavigator({
  ExchangeScreen:{screen:ExchangeScreen},
  Homescreen:{screen:Homescreen}
})

const AppContainer =  createAppContainer(switchNavigator);
