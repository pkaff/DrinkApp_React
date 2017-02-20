import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
} from 'react-native';

export default class MyDrinks extends Component {
  static navigationOptions = {
    title: 'My Drinks'
  }
  
  render() {
    return (
		<View>
            <Button
                onPress = {() => this.props.navigation.navigate('AddDrink')}
                title='Add Drink'
                color='#841584'
                accessabilityLabel='Learn more about this purple button'
                >
            </Button>
            <Image 
                style={{width: 50, height: 50}}
                source={{uri:'../img/cocktailimg.jpg'}} />
	    </View>
    );
  }
}

