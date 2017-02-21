import DrinkRow from './ListView_DrinkRow'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Text,
  Button,
} from 'react-native';

export default class AllDrinks extends Component {
  static navigationOptions = {
    title: 'All Drinks'
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'teal' }}
      >
        <Button
          onPress={() => this.props.navigation.navigate('AddDrink')}
          title='Add Drink'
          color='#841584'
        >
        </Button>
        <ListView
          dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows([{ drinkName: 'Margarita', glass: 'Margarita' }, { drinkName: 'Soda Pop', glass: 'Highball' }])}
          renderRow={(data) => <DrinkRow {...data} />}
        />
      </View>
    );
  }
}