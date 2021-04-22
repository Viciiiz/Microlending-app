import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Where the regular user-related stuff should take place.
/**
 * There are 4 buttons that are not functional yet. The UI is just a test, so you guys can 
 * edit it as you wish.
 */
class RegUserScreen extends React.Component {
    
  goToLending = (navigate) => {
    navigate('Lending')
  }

  goToLoanPools = (navigate) => {
    navigate('LoanPools')
  }

  goToSettings = (navigate) => {
    navigate('Settings')
  }

  goToReceivedRequests = (navigate) => {
    navigate('ReceivedRequests')
  }

  goToProfile = (navigate) => {
    navigate('Profile')
  }

  goToMyRequests = (navigate) => {
    navigate('SentRequests')
  }
  
    render() {
      return (
        <View style={styles.screen}>
          <Text style={styles.welcomeText}>User Banking Page</Text>
          <View style={styles.view}>
            <View style={{flexDirection:"row"}}>
              <Button style={styles.button}
              onPress={()=>this.goToProfile(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Profile</Text>
              </Button>
              <Button style={styles.button}
              onPress={()=>this.goToMyRequests(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>My Requests</Text>
              </Button>
            </View>
            <View style={{flexDirection:"row"}}>
              <Button style={styles.button}
              onPress={()=>this.goToReceivedRequests(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>View Loan Requests</Text>
              </Button>
              <Button style={styles.button} 
              onPress={()=>this.goToLoanPools(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Loan Pools</Text>
              </Button>
            </View>
            <View style={{flexDirection:"row"}}>
              <Button style={styles.button} 
              onPress={()=>this.goToLending(this.props.navigation.navigate)}
              >
                <Text style={styles.buttonText}>Lend</Text>
              </Button>
              <Button style={styles.button}
              onPress={()=>this.goToSettings(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Settings</Text>
              </Button>
              
            </View>
            
          </View>
        </View>
        
      )
    }
}


//Styles will go here
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 5,
    aspectRatio: 10/8.5,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  screen: {
    backgroundColor: '#000',
    height: '100%'

  },
  view: {
    // height: '100%',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    // top: '15%',
    // flex: 1,
    // alignSelf: 'stretch'
  },
  welcomeText: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    margin: '5%',
    marginBottom: '10%'
  }
})

export default RegUserScreen;