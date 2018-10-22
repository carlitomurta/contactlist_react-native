import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ContactItem from './ContactItem';

const ContactList = props => {
  const { contacts, onPressItem } = props;
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => (
        <ContactItem person={item} openDetail={onPressItem} />
      )}
      keyExtractor={item => item.login.uuid}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff'
  }
});

export default ContactList;
