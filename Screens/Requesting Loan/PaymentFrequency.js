import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';


//This is where the user specifies their desired payment plan (every how many days will they pay).
class PaymentFrequency extends React.Component {
    
    goBackToDateSpecificationScreen = (navigate) => {
        navigate('DateScreen')
    }

    goToInterestScreen = (navigate) => {
        navigate('Interest')
    }
    
    render() {

      return (
        <View>
            <View>
                <Text style={styles.welcomeText}>Enter your desired payment plan: </Text>
            </View>
            <View style={styles.dropdownView}>
                <DropDownPicker
                    items={[
                        {label: 'Daily', value: 'daily'},
                        {label: 'Weekly', value: 'weekly'},
                        {label: 'Monthly', value: 'monthly'}, 
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
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToDateSpecificationScreen(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                onPress={()=>this.goToInterestScreen(this.props.navigation.navigate)}>
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
        height: 40
    },
    dropdownView: {
        alignItems: 'flex-start',
        marginEnd: 10,
        marginLeft: 10,
        marginBottom: 200,
        marginTop: 5
    },
    welcomeText: {
        margin: 10,
        fontSize: 17
    }
})

export default PaymentFrequency;
