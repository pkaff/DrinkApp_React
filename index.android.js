import AddDrink from './src/AddDrink';
import AllDrinks from './src/AllDrinks';
import MyDrinks from './src/MyDrinks';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';

const MainScreenNavigator = TabNavigator({
  MyDrinks: {screen: MyDrinks},
  AllDrinks: {screen: AllDrinks},
});

MainScreenNavigator.navigationOptions = {title: 'Daniels Drinks'}

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  AddDrink: { screen: AddDrink },
});

AppRegistry.registerComponent('DanielsDrinks', () => App);
