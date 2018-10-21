import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import Header from './src/components/Header';
export default class App extends React.Component {
  list() {
    let listOfNames = [];
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(res => {
        const { results } = res.data;
        listOfNames = results.map(people => people.name.first);
        console.log(listOfNames);
      })
      .catch(err => {
        console.log(err);
      });

    return listOfNames;
  }

  render() {
    return (
      <View>
        <Header title="Contatos" />
        {this.list()}
      </View>
    );
  }
}
