import React, { Component } from 'react'
import {
    Fab,
    Button,
    Icon
} from 'native-base';

export default class AddDrinkFAB extends Component {
    render() {
        return (
            <Fab
                direction='up'
                style={{ backgroundColor: '#5067FF' }}
                position='bottomRight'
                onPress={() => this.props.onClick()}
            >
                <Icon name="add" />
            </Fab>
        );
    }
}