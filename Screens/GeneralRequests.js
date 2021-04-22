import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';


//This is where the user can view and accept general requests, i.e. requests that were
//not directly addressed to them
class GeneralRequests extends React.Component {
    render() {
      return (
        <View style={styles.viewWrap}>
            <Text style={styles.welcomeText}>Here a requests from other users:</Text>
        </View>
      )
    }
  }

//Styles go here
const styles = StyleSheet.create({
    viewWrap: {
        backgroundColor: 'black',
        height: '100%'
    },
    welcomeText: {
        color: 'white',
        fontSize: 18,
        margin: 10
    }
})

export default GeneralRequests;