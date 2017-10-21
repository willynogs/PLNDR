import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAuFgAw_IsyvrvLC0LrmzuSMHD82rIrCZ0",
      authDomain: "plnr-89850.firebaseapp.com",
      databaseURL: "https://plnr-89850.firebaseio.com",
      projectId: "plnr-89850",
      storageBucket: "plnr-89850.appspot.com",
      messagingSenderId: "343835205064"
    });

    firebase.auth().createUserWithEmailAndPassword('willynogs@gmail.com', 'password123').catch(e => {
      // show user this error when they try to sign up
      console.log(`Error ${e.code}: ${e.message}`);
    })
  }

  render() {
    return (
      <View>
        <Text>PLNR</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
