import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import Line from '../components/DetailLine';
export default class ContactDetailPage extends React.Component {
  render() {
    const { person } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: person.picture.large }} style={styles.avatar} />
        <View style={styles.detailContainer}>
          <Line label="Email: " content={person.email} />
          <Line label="Cidade: " content={person.location.city} />
          <Line label="Estado: " content={person.location.state} />
          <Line label="Telefone: " content={person.phone} />
          <Line label="Celular: " content={person.cell} />
          <Line label="Nacionalidade: " content={person.nat} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  detailContainer: {
    marginTop: 20,
    elevation: 1,
    backgroundColor: '#e2f9ff'
  },
  avatar: {
    aspectRatio: 1
  }
});
