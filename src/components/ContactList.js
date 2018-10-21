import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

const ContactList = props => {
  const items = props.contacts.map(person => {
    return <ContactItem key={person.name.first} person={person} />;
  });
  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff'
  }
});

export default ContactList;
