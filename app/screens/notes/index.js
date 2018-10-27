/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
/* Package Import will lives here */


export default class Notes extends Component {
  static navigationOptions = {
    title: 'Notes',
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
        <Text>Notes Page</Text>
      </View>
    );
  }
}

