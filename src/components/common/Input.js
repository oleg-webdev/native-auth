import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {

  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secure}
        autoCapitalize={'none'}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}/>
    </View>
  );

};

export { Input };

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    lineHeight: 23,
    paddingLeft: 15,
    flex: 1,
  },
  inputStyle: {
    color: '#000',
    padding: 10,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    width: 100,
    // backgroundColor: '#e0ecff'
  }
});
