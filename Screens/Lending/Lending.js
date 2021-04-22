import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';


//This is where the user specifies the amount they want to lend
class Lending extends React.Component {

    goBackToRegUser = (navigate) => {
        navigate('RegUser')
    }

    goToLendingConfirmation = (navigate) => {
        navigate('LendingConfirmation')
    }

    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.welcomeText}>Specify the loan category you want to lend to: </Text>
            <View style={styles.dropdownView}>
                <DropDownPicker
                    items={[
                        {label: 'Any', value: 'Any'},
                        {label: 'Loan Pool 1', value: 'loan1'},
                        {label: 'Loan Pool 2', value: 'loan2'}, 
                    ]}
                    // style = {styles.dropdown}
                    // defaultValue={this.userStatus}
                    containerStyle={styles.dropdown}
                    // style={{backgroundColor: '#fafafa'}}
                    itemStyle={styles.dropdownItem}
                    // dropDownStyle={{backgroundColor: '#fafafa'}}
                    // onChangeItem={item => this.setState({
                    //   status: item.value
                    // })}
                />
            </View>
            <Text style={styles.welcomeText}>Who will be able to borrow your loan?</Text>
            <View style={styles.dropdownView}>
                <DropDownPicker
                    items={[
                        {label: 'Any', value: 'Any'},
                        // {label: 'Contacts only', value: 'contacts'},
                        {label: 'Close friends', value: 'friends'}, 
                        {label: 'Custom', value: 'custom'}, 
                    ]}
                    // style = {styles.dropdown}
                    // defaultValue={this.userStatus}
                    containerStyle={styles.dropdown}
                    // style={{backgroundColor: '#fafafa'}}
                    itemStyle={styles.dropdownItem}
                    // dropDownStyle={{backgroundColor: '#fafafa'}}
                    // onChangeItem={item => this.setState({
                    //   status: item.value
                    // })}
                />
            </View>
            <Text style={styles.welcomeText}>Specify the amount you would like to lend:</Text>
            <View style={styles.inputAlignment}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.inputText}>$</Text>
                    <TextInput keyboardType='numeric' 
                    style={styles.input}/>
                </View>
            </View>
            <View style={{flexDirection:'row', marginTop: 40}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToRegUser(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToLendingConfirmation(this.props.navigation.navigate)}>
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
    dropdown: {
        width: '40%',
        height: 40,
    },
    dropdownItem: {
        width: '100%',
        height: 40,
        // marginLeft: 10
    },
    dropdownView: {
        alignItems: 'flex-start',
        marginEnd: 10,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 5
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

export default Lending;