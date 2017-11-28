import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {

  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );

}

export {Header};

const styles = StyleSheet.create({
  viewStyle: {
    height: 80,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .2,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25,
  },
});