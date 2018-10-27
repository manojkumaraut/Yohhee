/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
/* Package Import will lives here */


export default class Scane extends Component {
  static navigationOptions = {
    title: 'Scan',
    headerStyle: {
      backgroundColor: '#635ad2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  }
  render() {
    return (
      <View>
        <Text>Scan Page</Text>
      </View>
    );
  }
}

