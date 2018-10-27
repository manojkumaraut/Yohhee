/* Package Import will lives here */
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, View, Text } from 'react-native';
import { RkTextInput, RkButton } from 'react-native-ui-kitten';
/* Package Import will lives here */

const { width, height } = Dimensions.get('window');

export default class Login extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.backgroundImage}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../app/assets/images/login-bg.png')} />
        </View>
        <View style={styles.loginContainer}>
          <RkTextInput
            style={styles.textBox}
            rkType='rounded'
            placeholder='Username'
            returnKeyType={"next"}
          />
          <RkTextInput
            style={styles.textBox}
            rkType='rounded'
            placeholder='Password'
            secureTextEntry={true}
            returnKeyType={"done"}
          />
          <RkButton style={styles.loginButton} rkType="rounded"
            onPress={() => { this.props.navigation.navigate('Dashboard') }}
          >
            Login
          </RkButton>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  image: {
    width: width,
    height:300
  },
  textBox: {
    marginBottom:20
  },
  imageContainer: {
  },
  loginContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-end',
    marginTop:40
  },
  loginButton: {
    width: width - 40,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#625AD4'
  }
});
