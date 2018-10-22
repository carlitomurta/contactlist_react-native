import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { capitalize } from '../util';
const ContactItem = props => {
  const { person, openDetail } = props;
  const { title, first, last } = person.name;
  const { thumbnail } = person.picture;
  return (
    <TouchableOpacity
      onPress={() => {
        openDetail({ person });
      }}
    >
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: thumbnail }} />
        <Text style={styles.lineText}>{`${capitalize(title)} ${capitalize(
          first
        )} ${capitalize(last)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 50,
    flex: 1,
    marginLeft: 15
  }
});
export default ContactItem;
