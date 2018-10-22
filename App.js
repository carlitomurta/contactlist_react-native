import ContactsPage from './src/pages/ContactsPage';
import ContactDetailPage from './src/pages/ContactDetailPage';
import { createStackNavigator } from 'react-navigation';
import capitalize from './src/util/capitalize';
export default createStackNavigator(
  {
    Main: {
      screen: ContactsPage
    },
    ContactDetail: {
      screen: ContactDetailPage,
      navigationOptions: ({ navigation }) => {
        const { first, last } = navigation.state.params.person.name;
        return {
          title: `${capitalize(first)} ${capitalize(last)}`,
          headerTitleStyle: {
            color: 'white',
            fontSize: 24
          }
        };
      }
    }
  },
  {
    navigationOptions: {
      title: 'Contacts',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 24
      }
    }
  }
);
