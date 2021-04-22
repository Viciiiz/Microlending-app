import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';



//This is where the user verifies their transaction before confirming.
class VerificationScreen extends React.Component {
    goBackToInterestScreen = (navigate) => {
        navigate('Interest')
    }

    goToSummaryScreen = (navigate) => {
        navigate('Summary')
    }
    
    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.text}>Verify your Loan Request</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Total amount:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}insert amount{'>'}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Amount paid by:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}insert due date{'>'}</Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Payment frequency:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}insert frequency{'>'}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                 onPress={()=>this.goBackToInterestScreen(this.props.navigation.navigate)}
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