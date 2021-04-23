import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import * as React from 'react';
import { Button,} from 'native-base';

class ManagerScreen extends React.Component {
    

  goToAddMicroDollars = (navigate) => {
    navigate('AddMicroDollars')
  }
   
  goToCreateLoansPools = (navigate) => {
    navigate('CreateLoansPools')
  }

 goToCreateInterest = (navigate) => {
    navigate('CreateInterest')
  }
  goToSettings = (navigate) => {
    navigate('Settings')
  }

  goToProfile = (navigate) => {
    navigate('Profile')
  }

 
 
    render() {
      return (
  
        <View style={styles.screen}>
   
          <Text style={styles.welcomeText}>Manager Banking Page</Text>
          
          <View style={styles.view}>
           <View style={{flexDirection:"row"}}>
              
             
              <Button style={styles.button}
              onPress={()=>this.goToAddMicroDollars(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Micro Dollars</Text>
              </Button>
              <Button style={styles.button}
              onPress={()=>this.goToCreateLoansPools(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Create Loans</Text>
              </Button>
                <Button style={styles.button}
              onPress={()=>this.goToCreateInterest(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Create Interest</Text>
              </Button>
              </View>
              <View style={{flexDirection:"row"}}>
              <Button style={styles.button}
              onPress={()=>this.goToProfile(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>My Profile</Text>
              </Button>
               <Button style={styles.button}
              onPress={()=>this.goToSettings(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>My Settings</Text>
              </Button>
      
            </View>
          </View>
          
        </View>
        
      )
    }
}


const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    borderRadius: 5,
    aspectRatio: 10/8.5,
    marginBottom: 60,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20, 
    textAlign: 'center',
  },

  screen: {
    backgroundColor: '#000',
    height: '100%'

  },
  view: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
   
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


export default ManagerScreen;
