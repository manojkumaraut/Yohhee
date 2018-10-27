/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
/* Package Import will lives here */


export default class Scane extends Component {
  constructor(props) {
    super(props);
  }
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
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('Quiz') }}>
          <Text> Go to Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

