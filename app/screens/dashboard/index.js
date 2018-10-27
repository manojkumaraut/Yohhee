/* Package Import will lives here */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, ImageBackground, View, Text, TouchableHighlight } from 'react-native';
import { RkTextInput, RkButton } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';
/* Package Import will lives here */

const { width, height } = Dimensions.get('window');

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null,
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
      <View style={styles.backgroundImage}>
        <View style={styles.banner}>
          <ImageBackground source={require('../../assets/images/banner.jpg')} style={styles.bannerImage}>
            <View style={styles.score}>
              <Text style={styles.stext}> Score Board </Text>
              <Text style={styles.btext}> 450 </Text>
              <Text style={styles.stext}> points </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.tilecontent}>
          <View style={styles.row}>
            <View style={styles.tile}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('Scan') }}>
                <ImageBackground source={require('../../assets/images/scan.jpeg')} style={styles.imagebg}>
                  <Text style={styles.text}> Scan </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>
            <View style={styles.tile}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('Notes') }}>
                <ImageBackground source={require('../../assets/images/notes.jpeg')} style={styles.imagebg}>
                  <Text style={styles.text}> Notes </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.tile}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('LeaderBoard') }}>
                <ImageBackground source={require('../../assets/images/quiz.jpeg')} style={styles.imagebg}>
                  <Text style={styles.text}> Leader Board </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>
            <View style={styles.tile}>
              <TouchableHighlight onPress={() => { this.props.navigation.navigate('Workflow') }}>
                <ImageBackground source={require('../../assets/images/workflow.jpeg')} style={styles.imagebg}>
                  <Text style={styles.text}> Work Flow </Text>
                </ImageBackground>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  },
  score: {
    alignSelf: 'center',
    justifyContent: "space-around",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  btext: {
    color: '#fff',
    fontSize: 40,
    fontWeight: "bold"
  },
  stext: {
    color: '#fff',
    fontSize: 30,
  },
  tilecontent: {
    backgroundColor: '#fff',
    marginTop: -20,
    margin: 20,
    borderRadius: 20,
    padding: 10
  },
  banner: {
    height: 250
  },
  bannerImage: {
    height: 300,
  },
  imagebg: {
    height: 100,
  },
  row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    width: width / 2 - 40,
    marginHorizontal: 5
  },
  bannertext: {
    color: '#fff',
    alignSelf: 'center',
    justifyContent: "space-around",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  text: {
    fontSize: 25,
    color: '#fff',
    // fontSize: 30,
    alignSelf: 'center',
    marginTop: 30
  }
});
