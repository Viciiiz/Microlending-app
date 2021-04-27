import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the user can see the list of loan pools made available to him by the bank manager

class LoanPoolsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loanCategoryName: 'Default-Loan-Category',
        }
    }

    render() {
        return (
            <View style={styles.viewWrap}>
                <View style={styles.loanCategory}>
                    <Text style={styles.titleText}>Loan Pool Category 1 (Default)</Text>
                    {/* <View style={styles.interestView}>
                        <Text style={styles.amountText}>Accessible</Text>
                    </View> */}
                    <Text style={styles.totalText}>Interest Rates: </Text>
                    <View style={styles.totalView}>
                        <Text style={styles.amountText}>- Daily: 0.5%</Text>
                        <Text style={styles.amountText}>- Weekly: 2.5%</Text>
                        <Text style={styles.amountText}>- Monthly: 10%</Text>
                    </View>
                    <View style={{flexDirection:'row', marginBottom: 10}}>
                        <Button style={styles.buttonDetails}
                        // onPress={()=>}
                        >
                            <Text style={styles.buttonText}>Details</Text>
                        </Button>
                        <Button style={styles.buttonRequest}
                        onPress={()=> {
                            this.props.navigation.navigate('AmountScreen', {
                                loanCategoryName: this.state.loanCategoryName
                                })
                            }
                        }
                        >
                            <Text style={styles.buttonText}>Request Loan</Text>
                        </Button>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.buttonGeneral}>
                        <Text style={styles.buttonGeneralText}>Request More Loan Category</Text>
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
    buttonDetails: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#ccc',
    },
    buttonGeneral: {
        borderRadius: 10,
        marginHorizontal: 30,
        marginTop: 15,
        // textAlign: 'center'
        backgroundColor: 'lightgrey'
    },
    buttonGeneralText: {
        textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 17,
        padding: 40
    },
    buttonRequest: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: '#3eff00'
    },
    buttonText: {
        fontSize: 20,
    }, 
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    interestText: {
        fontSize: 17,
        marginLeft: 10,
        color: 'white',
        marginTop: 15,
        marginBottom: 5
    },
    interestView: {
        marginBottom: 10,
    },
    loanCategory: {
        backgroundColor: '#222524',
        borderRadius: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    titleText: {
        fontSize: 18,
        // marginLeft: 10,
        color: 'white',
        marginTop: 15,
        marginBottom: 15,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    totalText: {
        fontSize: 17,
        marginLeft: 10,
        color: 'white',
        marginBottom: 5
    },
    totalView: {
        marginBottom: 20
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default LoanPoolsScreen;