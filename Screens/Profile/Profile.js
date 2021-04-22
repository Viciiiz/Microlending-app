import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the action of the manager-related stuff should take place.
class Profile extends React.Component {

    goToAddBalance = (navigate) => {
        navigate('AddBalance')
    }

    goToTransactionHistory = (navigate) => {
        navigate('History')
    }

    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.welcomeText}>Username:</Text>
            <Text style={styles.userNameText}>{'<'}insert username{'>'}</Text>
            <View style={styles.balanceView}>
                <Text style={styles.balanceText}>My balance:</Text>
                <View style={styles.balanceAmountView}>
                    <Text style={styles.balanceAmountText}>$ 200.00</Text>
                </View>
            </View>
            <View>
                <Button style={styles.buttonAdd}
                onPress={()=>this.goToAddBalance(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Add balance</Text>
                </Button>
                <Button style={styles.buttonHistory}
                onPress={()=>this.goToTransactionHistory(this.props.navigation.navigate)}>
                    <Text style={styles.buttonText}>Transaction History</Text>
                </Button>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    balanceAmountText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 70,
        // fontWeight: '1000',
        marginTop: '20%',
        marginBottom: "20%",
    },
    balanceText: {
        color: 'white',
        // textAlign: 'center',
        fontSize: 19,
        // fontWeight: '1000',
        marginTop: 20,
        margin: 10,
        marginBottom: 15
    },
    balanceAmountView: {
        backgroundColor: '#545755',
        borderRadius: 50,
        margin: 20
    },
    buttonAdd: {
        // flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#3eff00',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 40
    },
    buttonHistory: {
        // flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#ccc',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 10,
        // marginTop: 40
    },
    buttonText: {
        fontSize: 19
    },
    userNameText: {
        color: 'white',
        marginTop: 10,
        fontSize: 19,
        // marginLeft: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    },
    welcomeText: {
        color: 'white',
        margin: 10,
        fontSize: 19
    }
})

export default Profile;