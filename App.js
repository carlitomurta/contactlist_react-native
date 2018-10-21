import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Header from './src/components/Header';
import ContactList from './src/components/ContactList';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(res => {
        const { results } = res.data;
        this.setState({
          contacts: results
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Header title="Contatos" />
        <ContactList contacts={this.state.contacts} />
      </View>
    );
  }
}
