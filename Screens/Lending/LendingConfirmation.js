import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';



//This is where the user verifies their transaction before confirming.
class LendingConfirmation extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            toWhichLoan: this.props.navigation.state.params.toWhichLoan,
            toWhom: this.props.navigation.state.params.toWhom,
            lentAmount: this.props.navigation.state.params.lentAmount,
            ID: ''
        }
    }
    
    goBackToLending = (navigate) => {
        navigate('Lending')
    }

    // goToSummaryScreen = (navigate) => {
    //     navigate('LendingSummary')
    // }

    generateID = () => {
        var random = Math.floor(Math.random() * 100000) + 1; // random number between 1 and 100000
        this.setState({ID: random})
    }
    
    render() {

      if (this.state.ID == ''){
          this.generateID();
      }

      return (
        <View style={styles.viewWrap}>
            <Text style={styles.text}>Verify your Lending Process:</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Amount made available to other users:</Text>
                    <Text style={styles.textVerificationValue}>$ {this.state.lentAmount}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Loan pool(s) you are lending to:</Text>
                    <Text style={styles.textVerificationValue}>{this.state.toWhichLoan}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Users to whom you are lending</Text>
                    <Text style={styles.textVerificationValue}>{this.state.toWhom}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Button style={styles.buttonBack}
                 onPress={()=>this.goBackToLending(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.props.navigation.navigate('LendingSummary', {
                    toWhichLoan: this.state.toWhichLoan, 
                    toWhom: this.state.toWhom,
                    lentAmount: this.state.lentAmount,
                    ID: this.state.ID,
                })}
                >
                    <Text style={styles.buttonText}>Confirm</Text>
                </Button>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    buttonBack: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    buttonNext: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#3eff00'
    },
    buttonText: {
        fontSize: 20,
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
    },
    textVerificationValue: {
        fontSize: 18,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 5
    },
    textView: {
        margin: 10,
        marginBottom: 20
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default LendingConfirmation;