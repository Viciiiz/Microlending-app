import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';
import firebase from 'firebase'


//This is the summary of the user's lending.
class LendingSummary extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            toWhichLoan: this.props.navigation.state.params.toWhichLoan,
            toWhom: this.props.navigation.state.params.toWhom,
            lentAmount: this.props.navigation.state.params.lentAmount,
            ID: this.props.navigation.state.params.ID,
        }
    }
    
    goToUserScreen = (navigate) => {
        navigate('RegUser')
    }

    writeIDtoDB = (ID, email) => {
        try {
            // var emailadd = String(email);
            firebase.database().ref('UserLending/').update({
            [ID]: {
                  email: email,
                  toWhichLoanCategory: this.state.toWhichLoan,
                  amount: this.state.lentAmount,
                  toWhichUser: this.state.toWhom,
                }
            });
    
        } catch (error) {
            console.log(error.toString())
        }
     }
    
    render() {

      var emailA = firebase.auth().currentUser.email.replace(".","");
      this.writeIDtoDB(this.state.ID, emailA)

      return (
        <View style={styles.viewWrap}>
            <Text style={styles.text}>
                Your lending process was successful. Wait for other users to borrow from you.
            </Text>
            <View style={styles.buttonView}>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToUserScreen(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Exit</Text>
                </Button>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    buttonNext: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#3eff00',
        // height: 100
    },
    buttonText: {
        fontSize: 20,
        margin: 20
    },
    buttonView: {
        height: 20,
        padding: 20,
        flexDirection:'row'
    },
    text: {
        fontSize: 18,
        margin: 10,
        color: 'white',
        marginTop: 15
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default LendingSummary;