
import React, { Component } from 'react';
import {
  Container,
  Form,
  Content,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Text,
  Grid
} from 'native-base';

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
          <Grid>
            <Button
              style={{ flex: 1, margin: 10 }}
              iconRight
              block
              onPress={() => { }}
            >
              <Icon style={{ padding: 4 }} name='add' />
              <Text>Add drink</Text>
            </Button>
            <Button
              style={{ flex: 1, margin: 10 }}
              iconLeft
              block
              onPress={() => { }}
            >
              <Text>Clear form</Text>
              <Icon style={{ padding: 4 }} name='remove' />
            </Button>
          </Grid>
        </Content>
      </Container>
    )
  }
}