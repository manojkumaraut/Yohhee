/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import LottieView from 'lottie-react-native';
/* Package Import will lives here */

const leaderBardData = [
  { rank: 1, name: "srini", score: 520 },
  { rank: 2, name: "srini", score: 520 },
  { rank: 3, name: "srini", score: 520 },
  { rank: 4, name: "srini", score: 520 },
  { rank: 5, name: "srini", score: 520 },
  { rank: 6, name: "srini", score: 520 },
  { rank: 7, name: "srini", score: 520 }
]

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
        <FlatList
          data={leaderBardData}
          renderItem={({ item }) =>
            <RkCard rkType='shadowed'>
              <View rkCardHeader>
                <Text>{item.rank}</Text>
              </View>
              <View rkCardContent>
                <Text>Shadowed card</Text>
              </View>
            </RkCard>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comingsoon: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10
  }
});

