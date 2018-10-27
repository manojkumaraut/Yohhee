/* Package Import will lives here */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RadioGroup } from 'react-native-radio-buttons-group';
/* Package Import will lives here */

const scaned = `ICICI and Citi: 10% off up to Rs. 2000 on min order of Rs. 2,000. Get instant discount on ICICI Credit/Debit cards and EMIs. Get cashback (by Jan 28, 2019) on Citi Credit cards and EMIs. Here's how (terms and conditions apply)
ICICI and Citi Bonus offer: Additional 10% cashback (by Jan 28, 2019) up to Rs. 8,000 on total purchases above Rs. 50,000 with ICICI Debit/Credit cards, EMIs and Citi Credit cards and EMIs. Here's how (terms and conditions apply)
No cost EMI on select credit cards(ICICI, Citi, HDFC & Axis) on orders above Rs.3000, HDFC debit cards on orders above Rs.10,000 and Bajaj Finserv EMI cards on orders above Rs.4500 Here's how (terms and conditions apply)
Get offers for up to ₹2000 back on MakeMyTrip, Swiggy, Freshmenu & EazyDiner. Shop on the Amazon app during Great Indian Festival (no min order value) & pay through any prepaid payment method to become eligible | Valid from 24th - 28th Oct'18 Here's how (terms and conditions apply)
Go Cashless: Get 50% cashback up to Rs. 100 on your first online payment. Pay using ATM card or credit card. Offer period 1st October to 31st October. Cashback will be credited as Amazon Pay balance within 15 days from purchase. Here's how (terms and conditions apply)
Go Cashless: Get 10% cashback up to Rs. 50 using BHIM UPI or RuPay cards. Offer period October 1st to October 31st. Cashback will be credited as Amazon Pay balance within 15 calendar days from purchase. Here's how (terms and conditions apply)`

export default class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getQuiz = async () => {
    await fetch('https://yohhee.herokuapp.com/GeneratedQuiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: "ScannedText=" + scaned
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ data: responseJson });
        // return responseJson
      })
      .catch((error) => {
        console.error(error);
      });
  }


  componentWillMount() {
    this.getQuiz();
  }

  static navigationOptions = {
    title: 'Quiz',
    headerStyle: {
      backgroundColor: '#635ad2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  }

  onPress = data => this.setState({ data });

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View styles={styles.containerView}>
          {
            this.state.data.map(singleQuestion => (
              (singleQuestion.answer.length > 0) &&
              <View>
                <Text>{singleQuestion.question}</Text>
                {
                  singleQuestion.answer.map(singleAnswer => (
                    <RadioGroup radioButtons={this.state.data.answer} onPress={this.onPress} />
                  ))
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20
  },
  containerView: {
    borderWidth:1,
    borderColor:'#f00'
  }
});
