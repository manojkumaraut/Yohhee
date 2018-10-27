/* Package Import will lives here */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
/* Package Import will lives here */

export default class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login')
    }, 2000);
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../../app/assets/images/Splash_Screent.png')} />
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});
