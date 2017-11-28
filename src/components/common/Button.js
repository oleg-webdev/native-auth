import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressCallback, children }) => {

  const { buttonStyle, buttonText } = styles;

  return (
    <TouchableOpacity onPress={onPressCallback} style={buttonStyle}>
      <Text style={buttonText}>{children}</Text>
    </TouchableOpacity>
  );

};

export { Button };

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#52a5ff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    padding: 15,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }
});