import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the user can see the list of loan pools made available to him by the bank manager
/**
 * I needed this screen for one of my objectives (For the 
 * user to request a loan from any of the loan pools.)
 * I will just need one button that you guys can style as you wish.
 */
class LoanPoolsScreen extends React.Component {

    goToAmountSpecification = (navigate) => {
        navigate('AmountScreen')
    }

    render() {
      return (
        <View>
            <Text>Welcome to the Loan Pool Screen! (Read code comments) </Text>
            <Button style={styles.requestButton}
            onPress={()=>this.goToAmountSpecification(this.props.navigation.navigate)}>
                <Text style={styles.requestButtonText}>Request Loan</Text>
            </Button>
        </View>
      )
    }
}

//Styles go here
const styles = StyleSheet.create({
    requestButton: {
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    requestButtonText: {
        color: '#000',
    }
})

export default LoanPoolsScreen;