import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';


//This is where the user specifies the amount they want to borrow
class AmountSpecificationScreen extends React.Component {

    goBackToLoanPools = (navigate) => {
        navigate('LoanPools')
    }

    goToDateSpecificationScreen = (navigate) => {
        navigate('DateScreen')
    }

    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.welcomeText}>You are requesting a loan from </Text>
            <Text style={styles.loanName}>{'<'}insert loan pool category name{'>'}</Text>
            <Text style={styles.welcomeText}>Specify the amount you would like to borrow:</Text>
            <View style={styles.inputAlignment}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.inputText}>$</Text>
                    <TextInput keyboardType='numeric' 
                    style={styles.input}/>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToLoanPools(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToDateSpecificationScreen(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Next</Text>
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
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        color: 'white',
        backgroundColor: '#333534',
        fontSize: 17
    },
    inputAlignment: {
        alignItems: 'center',
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    loanName: {
        color: 'white',
        fontSize: 19,
        marginBottom: 10,
        marginLeft: 50,
        fontWeight: 'bold'
    },
    welcomeText: {
        fontSize: 19,
        margin: 5,
        marginBottom: 10,
        marginTop: 10,
        color: 'white'
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default AmountSpecificationScreen;