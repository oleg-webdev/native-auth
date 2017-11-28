import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Card, CardSection, Button } from './src/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={"Auth"}/>
        <Card>
          <CardSection>
            <Text>Lorem Ipsum Content</Text>
          </CardSection>
          <CardSection>
            <Button>Auth</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
