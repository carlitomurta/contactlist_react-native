import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ErrorComponent = ({ error = '' }) => (
  <View>
    <Text>{error}</Text>
  </View>
);
const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  }
});
export default ErrorComponent;
