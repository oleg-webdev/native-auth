import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {

  const { spinnerStyle, containerStyles } = styles;

  return (
    <View style={containerStyles}>
      <ActivityIndicator size={size || 'large'}/>
      <Text style={spinnerStyle}>Loading...</Text>
    </View>
  );

};

export { Spinner };

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  spinnerStyle: {
    fontSize: 18,
    marginLeft: 10
  }
});
