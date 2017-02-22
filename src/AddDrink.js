

import React, { Component } from 'react';
import {
  Container,
  Form,
  Content,
  Item,
  Input,
  Label,
  Button,
  Text,
  Grid,
  Icon
} from 'native-base';
//import Icon from 'react-native-vector-icons';

export default class AddDrink extends Component {
  static navigationOptions = {
    title: 'Add Drink'
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Drink name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Glass type</Label>
              <Input />
            </Item>

          </Form>
          <Grid style={{ alignItems: 'center' }}>
              <Button
                style={{ flex: 1, margin: 10, alignItems: 'center' }}
                iconLeft
                block
                onPress={() => { }}
              >
                <Icon style={{ padding: 4 }} name='add' />
                <Text>Add drink</Text>
              </Button>
              <Button
                style={{ flex: 1, margin: 10, alignItems: 'center' }}
                iconRight
                block
                onPress={() => { }}
              >
                <Text>Clear form</Text>
                <Icon style={{ padding: 4 }} name='close' />
              </Button>
          </Grid>
        </Content>
      </Container>
    )
  }
}