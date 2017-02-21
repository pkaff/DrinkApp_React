import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default class AllDrinks extends Component {
  static navigationOptions = {
    title: 'All Drinks'
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('AddDrink')}
          title='Learn More'
          color='#841584'
        >
        </Button>
      </View>
    );
  }
}