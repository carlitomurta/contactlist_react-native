import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: '#488aff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    color: '#fff'
  }
});
export default Header;
