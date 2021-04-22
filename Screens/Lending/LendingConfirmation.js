import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';



//This is where the user verifies their transaction before confirming.
class LendingConfirmation extends React.Component {
    goBackToLending = (navigate) => {
        navigate('Lending')
    }

    goToSummaryScreen = (navigate) => {
        navigate('LendingSummary')
    }
    
    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.text}>Verify your Lending Process:</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Amount made available to other users:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}insert amount{'>'}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Loan pool(s) you are lending to:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}insert loan pool name{'>'}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop: 20}}>
                <Button style={styles.buttonBack}
                 onPress={()=>this.goBackToLending(this.props.navigation.navigate)}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToSummaryScreen(this.props.navigation.navigate)}
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