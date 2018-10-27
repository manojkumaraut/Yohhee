/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
/* Package Import will lives here */


export default class LeaderBoard extends Component {

  static navigationOptions = {
    title: 'Work Flow',
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
      <View style={styles.comingsoon}>
        <Text>Leader Board</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comingsoon: {
    flex: 1,
    backgroundColor: '#eee'
  }
});

