/* Package Import will lives here */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
/* Package Import will lives here */

/* Project Import will lives here */
import { scale } from './app/utils';
import { Constants } from './app/config';
import SplashScreen from './app/screens/splashScreen';
import Login from './app/screens/login';
import Dashboard from './app/screens/dashboard';
import Scan from './app/screens/scan';
import Notes from './app/screens/notes';
import Workflow from './app/screens/workflow';
import LeaderBoard from './app/screens/leaderBoard';
/* Project Import will lives here */

const Yohhee = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  Scan: { screen: Scan },
  Notes: { screen: Notes },
  Workflow: { screen: Workflow },
  LeaderBoard: { screen: LeaderBoard },
}
);

export default class App extends Component {
  render() {
    return (
      <Yohhee />
    );
  }
}
