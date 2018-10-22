import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ContactList from '../components/ContactList';
import ErrorComponent from '../components/ErrorComponent';
export default class ContactsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://randomuser.me/api/?nat=br&results=35')
      .then(res => {
        const { results } = res.data;
        this.setState({
          contacts: results,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
      });
  }

  renderPage() {
    return this.state.loading ? (
      <ActivityIndicator size="large" color="#6ca2f7" />
    ) : this.state.error ? (
      <ErrorComponent
        style={styles.error}
        error="Oops... Something went wrong! :("
      />
    ) : (
      <ContactList
        contacts={this.state.contacts}
        onPressItem={pageParams => {
          this.props.navigation.navigate('ContactDetail', pageParams);
        }}
      />
    );
  }

  render() {
    return <View style={styles.container}>{this.renderPage()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    alignSelf: 'center'
  }
});
