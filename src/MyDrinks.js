import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {
  Fab,
  Button,
  Icon
} from 'native-base';

export default class MyDrinks extends Component {
  static navigationOptions = {
    title: 'My Drinks'
  }

  constructor() {
    super();
    this.state = {
      active: true
    }
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
        <Fab
          active={this.state.active}
          direction='up'
          style={{ backgroundColor: '#5067FF' }}
          position='bottomRight'
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </View>
        );
  }
}

