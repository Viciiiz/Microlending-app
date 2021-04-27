import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';
import firebase from 'firebase'


//This is the summary of the user's request.
class SummaryScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            ID: this.props.navigation.state.params.ID,
            total: this.props.navigation.state.params.total,
            frequency: this.props.navigation.state.params.frequency,
            date: this.props.navigation.state.params.date,
            userLoanRequestAmount: this.props.navigation.state.params.userLoanRequestAmount,
            loanCategoryName: this.props.navigation.state.params.loanCategoryName
        }
    }
    
    goToUserScreen = (navigate) => {
        navigate('RegUser')
    }

    writeIDtoDB = (ID, email) => {
        try {
            // var emailadd = String(email);
            firebase.database().ref('LoanRequests/').update({
            [ID]: {
                  email: email,
                  LoanPool: this.state.loanCategoryName,
                  amount: this.state.total,
                  date: this.state.date,
                  frequency: this.state.frequency,
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
            <Text style={styles.text}>Your Loan Request was approved.</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Loan ID:</Text>
                    <Text style={styles.textVerificationValue}>{this.props.navigation.state.params.ID}</Text>
                </View>
            </View>
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
    textVerification: {
        fontSize: 18,
        marginLeft: 20,
        color: 'white',
        marginBottom: 10
    },
    textVerificationValue: {
        fontSize: 18,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'white'
    },
    textView: {
        margin: 10
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default SummaryScreen;