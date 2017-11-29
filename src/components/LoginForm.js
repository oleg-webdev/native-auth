import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from "react-native";
import { Card, CardSection, Button, Input, Spinner } from './common';

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onSubmitProcess() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        // console.log(error.code);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(error => {
            // console.log(error.code);
            this.setState({
              error: 'Authentication Fails',
              loading: false
            });
          })
      })
  }

  renderErrors() {
    if (this.state.error.length > 0) {
      return <Text style={styles.errorAlert}>{this.state.error}</Text>
    }

    return null;
  }

  renderSpinner() {
    if (this.state.loading) {
      return <Spinner size={'small'}/>
    }

    return null;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={'Email'}
            placeholder={'user@gmail.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}/>
        </CardSection>
        <CardSection>
          <Input
            secure
            label={'Password'}
            placeholder={'password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}/>
        </CardSection>

        {this.renderErrors()}
        {this.renderSpinner()}

        <CardSection>
          <Button onPressCallback={this.onSubmitProcess.bind(this)}>Log In</Button>
        </CardSection>
      </Card>
    );
  }

}

const styles = StyleSheet.create({
  errorAlert: {
    backgroundColor: 'crimson',
    padding: 10,
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    textAlign: 'center'
  }
});
