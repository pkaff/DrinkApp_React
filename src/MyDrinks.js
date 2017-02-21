import AddDrinkFAB from './FAB_AddDrink'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
    Button,
} from 'native-base';

export default class MyDrinks extends Component {
  static navigationOptions = {
    title: 'My Drinks'
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <Button
          onPress={() => this.props.navigation.navigate('AddDrink')}
          title='Add Drink'
          color='#841584'
          full='true'
        >
          <Text>Add Drink</Text>
        </Button>
        <Image
          style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }}
          source={require('./../img/cocktailimg.jpg')}
        />
        <AddDrinkFAB
          onClick={() => this.props.navigation.navigate('AddDrink')}
        />
      </View>
    );
  }
}

