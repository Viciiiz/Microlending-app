import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the user sees the interests linked to their loan request.
class InterestScreen extends React.Component {
    goBackToPaymentPlanScreen = (navigate) => {
        navigate('PaymentPlan')
    }

    goToVerificationScreen = (navigate) => {
        navigate('Verification')
    }
    
    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.interestText}>Your interest:</Text>
            <View style={styles.interestView}>
                <Text style={styles.amountText}>{'<'}insert amount{'>'}</Text>
            </View>
            <Text style={styles.totalText}>Your total:</Text>
            <View style={styles.totalView}>
                <Text style={styles.amountText}>{'<'}insert amount{'>'}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToPaymentPlanScreen(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToVerificationScreen(this.props.navigation.navigate)}
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