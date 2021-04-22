import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';


//This is where the users sees the list of direct requests they received.
class ReceivedRequests extends React.Component {
    render() {
      return (
        <View style={styles.viewWrap}>
            <View style={styles.welcomeView}>
                <Text style = {styles.welcomeText}>You have received 0 loan requests.</Text>
                <View style={styles.buttonView}>
                    <Button style={styles.buttonGeneral}>
                        <Text style={styles.buttonGeneralText}>View General Requests</Text>
                    </Button>
                </View>
            </View>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    buttonGeneral: {
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 15,
        // textAlign: 'center'
        backgroundColor: 'lightgrey'
    },
    buttonGeneralText: {
        textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 17,
        padding: 70
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewWrap: {
        height: '100%',
        backgroundColor: 'black'
    },
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    welcomeView: {
        marginTop: 40,
        
    },
})

export default ReceivedRequests;