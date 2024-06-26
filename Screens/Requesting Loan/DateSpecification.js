import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import DatePicker from 'react-native-datepicker';
import { Button } from 'native-base';


//This is where the user specifies the date by when they plan to pay the whole amount back.

class DateSpecification extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            date:JSON.stringify(this.getCurrentDate()),
            userLoanRequestAmount: this.props.navigation.state.params.userLoanRequestAmount,
            loanCategoryName: this.props.navigation.state.params.loanCategoryName
        }
    }
    
    getCurrentDate=()=>{

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
  
        return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
    };

    getMaxDate=()=>{
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear() + 5;
  
        return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
    }

    goBackToAmountScreen = (navigate) => {
        navigate('AmountScreen')
    }

    // goToPaymentFrequency = (navigate) => {
    //     navigate('PaymentPlan')
    // }

    render() {
      return (
        <View style={styles.viewWrap}>
            <View>
                <Text style={styles.welcomeText}>Today is the <Text style={styles.dateText}>{this.getCurrentDate()}</Text></Text>
            </View>
            <View>
                <Text style={styles.welcomeText}>Specify the date by when you would have paid the whole amount:</Text>
                <DatePicker
                    style={styles.calendarStyle}//{{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate={JSON.stringify(this.getCurrentDate())}
                    maxDate={JSON.stringify(this.getMaxDate())}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ...check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
            <View style={{flexDirection:'row'}}>
                <Button style={styles.buttonBack}
                onPress={()=>this.goBackToAmountScreen(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Back</Text>
                </Button>
                <Button style={styles.buttonNext}
                  onPress={()=>this.props.navigation.navigate('PaymentPlan', 
                  {
                    userLoanRequestAmount: this.state.userLoanRequestAmount, 
                    date: this.state.date,
                    loanCategoryName: this.state.loanCategoryName
                })}
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
    calendarStyle: {
        width: 200,
        marginTop: 15,
        marginBottom: 30,
        marginLeft: 20
    },
    dateText: {
        fontWeight: 'bold'
    },
    welcomeText: {
        fontSize: 19,
        margin: 10,
        marginBottom: 10,
        marginTop: 20,
        color: 'white'
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default DateSpecification;
