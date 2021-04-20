import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';



//This is the summary of the user's request.
class SummaryScreen extends React.Component {
    goToUserScreen = (navigate) => {
        navigate('RegUser')
    }
    
    render() {
      return (
        <View>
            <Text style={styles.text}>Your Loan Request was approved.</Text>
            <View>
                <View style={styles.textView}>
                    <Text style={styles.textVerification}>Loan ID:</Text>
                    <Text style={styles.textVerificationValue}>{'<'}Generate ID{'>'}</Text>
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
        fontSize: 17,
        margin: 10,
    },
    textVerification: {
        fontSize: 17,
        marginLeft: 20,
    },
    textVerificationValue: {
        fontSize: 17,
        marginLeft: 50,
        fontWeight: 'bold'
    },
    textView: {
        margin: 10
    }
})

export default SummaryScreen;