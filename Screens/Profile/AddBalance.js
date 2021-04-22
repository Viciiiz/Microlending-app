import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';


//This is where the user adds balance to their account.
class AddBalance extends React.Component {
    render() {
      return (
        <View style={styles.wrapView}>
            <Text style={styles.welcomeText}>Here the user adds fund to their account</Text>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    welcomeText: {
        color: 'white',
        fontSize: 19,
        margin: 10
    },
    wrapView: {
        backgroundColor: 'black',
        height: '100%'
    }
})

export default AddBalance;