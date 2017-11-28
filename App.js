import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJyABaqWrMhgBTfszlihhnKOkd95038Cc',
      authDomain: 'native-auth-app-4dad4.firebaseapp.com',
      databaseURL: 'https://native-auth-app-4dad4.firebaseio.com',
      projectId: 'native-auth-app-4dad4',
      storageBucket: 'native-auth-app-4dad4.appspot.com',
      messagingSenderId: '225003692642'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Auth'}/>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
