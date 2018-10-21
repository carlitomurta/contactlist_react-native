import React from 'react';

const ContactItem = props => {
  const { person } = props;
  const { first, last } = person.name;
  return (
    <View style={styles.line}>
      <Text style={styles.lineText}>{`${first} ${last}`}</Text>
    </View>
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
    paddingLeft: 15
  }
});
export default ContactItem;
