import React from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import Exponent from 'exponent';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

const Router = createRouter(() => ({
  home: () => HomeScreen,
}));

class App extends React.Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <GiftedForm
        formName='formExample'
        openModal={(route) => {
          console.log(route)
        }}
        clearOnClose={false}
        >
        <GiftedForm.SeparatorWidget />
        <GiftedForm.TextInputWidget
          name='fullName' // mandatory
          title='Full name'
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
        />
      </GiftedForm>
    )
  }
}


AppRegistry.registerComponent('main', () => App);