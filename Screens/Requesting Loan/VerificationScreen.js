import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';



//This is where the user verifies their transaction before confirming.
class VerificationScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            ID: '',
            total: this.props.navigation.state.params.total,
            frequency: this.props.navigation.state.params.frequency,
            date: this.props.navigation.state.params.date,
            userLoanRequestAmount: this.props.navigation.state.params.userLoanRequestAmount,
            loanCategoryName: this.props.navigation.state.params.loanCategoryName
        }
    }

    goBackToInterestScreen = (navigate) => {
        navigate('Interest')
    }

    // goToSummaryScreen = (navigate) => {
    //     navigate('Summary')
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
            <Text style={styles.text}>Verify your Loan Request</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Loan Catergory:</Text>
                    <Text style={styles.textVerificationValue}>{this.state.loanCategoryName}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Total amount:</Text>
                    <Text style={styles.textVerificationValue}>$ {this.state.total}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Amount paid by:</Text>
                    <Text style={styles.textVerificationValue}>{this.props.navigation.state.params.date}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Payment frequency:</Text>
                    <Text style={styles.textVerificationValue}>{this.props.navigation.state.params.frequency}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                 onPress={()=>this.goBackToInterestScreen(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                 onPress={()=>this.props.navigation.navigate('Summary',{
                    userLoanRequestAmount: this.state.userLoanRequestAmount, 
                    date: this.state.date,
                    frequency: this.state.frequency,
                    total: this.state.total,
                    ID: this.state.ID,
                    loanCategoryName: this.state.loanCategoryName
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
        color: 'white'
    },
    textVerificationValue: {
        fontSize: 18,
        marginLeft: 50,
        fontWeight: 'bold',
        color: 'white',
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

export default VerificationScreen;