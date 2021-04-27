import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the user sees the interests linked to their loan request.
class InterestScreen extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            total: '',
            frequency: this.props.navigation.state.params.frequency,
            date: this.props.navigation.state.params.date,
            userLoanRequestAmount: this.props.navigation.state.params.userLoanRequestAmount,
            loanCategoryName: this.props.navigation.state.params.loanCategoryName
        }
    }
    
    
    goBackToPaymentPlanScreen = (navigate) => {
        navigate('PaymentPlan')
    }

    // goToVerificationScreen = (navigate) => {
    //     navigate('Verification')
    // }

    interestDuration = () => {
        var a = true
        if (a) {
            this.setState({total: '4'})
        }
    }

    tempInterestRate = () => {
        var interest = 0;
        switch (this.state.frequency){
            case "daily": 
                interest = "0.5";
                break;
            case "weekly": 
                interest = "2.5";
                break;
            case "monthly": 
                interest = "10";
                break;
            default:
                interest = "0"
        }
        return interest;
    }

    interestAmount = () => {
        return (parseFloat(this.tempInterestRate()) * parseFloat(this.props.navigation.state.params.userLoanRequestAmount)) / 100;
    }

    totalAmount = () => {
        return this.interestAmount()+parseFloat(this.state.userLoanRequestAmount);
    }

    updateStateTotal = () => {
        this.setState({total: this.totalAmount()})
    }
    
    render() {

      if (this.state.total == ''){
          this.updateStateTotal();
      }

      return (
        <View style={styles.viewWrap}>
            <Text style={styles.interestText}>Your interest:</Text>
            <View style={styles.interestView}>
                <Text style={styles.amountText}>( {this.tempInterestRate()} % )   ----{'>'}   $ {this.interestAmount()}</Text>
            </View>
            <Text style={styles.totalText}>Your total:</Text>
            <View style={styles.totalView}>
                <Text style={styles.amountText}>{this.totalAmount()}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToPaymentPlanScreen(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=> {
                    this.props.navigation.navigate('Verification', {
                        userLoanRequestAmount: this.state.userLoanRequestAmount, 
                        date: this.state.date,
                        frequency: this.state.frequency,
                        total: this.state.total,
                        loanCategoryName: this.state.loanCategoryName
                        })
                    }
                }
                >
                    <Text style={styles.buttonText}>Next</Text>
                </Button>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    amountText: {
        marginLeft: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
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
    interestText: {
        fontSize: 17,
        margin: 10,
        color: 'white',
        marginTop: 15
    },
    interestView: {
        marginBottom: 20,
    },
    totalText: {
        fontSize: 17,
        margin: 10,
        color: 'white'
    },
    totalView: {
        marginBottom: 20
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default InterestScreen;