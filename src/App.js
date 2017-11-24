import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD_hhcurzfTzDnE9N3btq_baPN7k3CT90s',
      authDomain: 'authentication-5881d.firebaseapp.com',
      databaseURL: 'https://authentication-5881d.firebaseio.com',
      projectId: 'authentication-5881d',
      storageBucket: 'authentication-5881d.appspot.com',
      messagingSenderId: '844572797638'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App </Text>
      </View>
    );
  }
}

export default App;
