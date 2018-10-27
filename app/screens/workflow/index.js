/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
/* Package Import will lives here */


export default class Workflow extends Component {
  static navigationOptions = {
    title: 'Workflow',
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
      <View style={styles.comingsoon} >
        <LottieView
          source={require('./coming_soon.json')}
          autoPlay
          loop
        />
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
