import { StyleSheet, Text, View, TouchableOpacity, Button, } from 'react-native';
import * as React from 'react';


class ManagerScreen extends React.Component {
    

  goToAddMicroDollars = (navigate) => {
    navigate('AddMicroDollars')
  }
   
  goToLoansPoolScreen = (navigate) => {
    navigate('LoansPoolScreen')
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
            <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'space-between',}}>
              
             
              <TouchableOpacity style={styles.button}
              onPress={()=>this.goToAddMicroDollars(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Micro Dollars</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>this.goToLoansPoolScreen(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Create Loans</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>this.goToCreateInterest(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>Create Interest</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
              onPress={()=>this.goToProfile(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>My Profile</Text>
              </TouchableOpacity>
               <TouchableOpacity style={styles.button}
              onPress={()=>this.goToSettings(this.props.navigation.navigate)}>
                <Text style={styles.buttonText}>My Settings</Text>
              </TouchableOpacity>
      
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
    borderRadius: 4,
    aspectRatio: 10/8.5,
    marginBottom: 310,
    marginLeft: 4,
    marginRight: 4,
    borderWidth: 2,
    borderColor: 'white',
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
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
