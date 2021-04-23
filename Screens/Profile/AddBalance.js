
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';


//This is where the user adds balance to their account. (not done yet -miraj)
class AddBalance extends React.Component {
    
  render() {
  return (

    <View style={styles.container}>

      <View style={{padding:30}}>
          <Text style={{color: 'white',fontSize: 50,fontWeight: '100',}}>Welcome:</Text>
          <Text style={{color: 'white',fontSize: 25, fontWeight: '500', paddingTop: 15, }}>Add Micro-Dollars Below:</Text>
       </View>

          <View style={styles.items}>
            <AccountBalance/>
            <NumberPadMain/>
          </View>

    </View>
  );
}
}
//Displays the Balance 
 const AccountBalance = () => {
    return(
       <View style={styles.accountBalance}>
           <Text style={{color: 'black',fontSize: 40,fontWeight: '200',}}>00</Text>
       </View>
     ) 
  }

//To add Micro-Dollars
  const AddCurrency = () => {
    return (
        <View style={styles.addMicro}>
           <TouchableOpacity style={styles.press}>
               <Text style={styles.currency}>1</Text>
            </TouchableOpacity>
       </View>
    )
  }


//Pressing Number Pad
 const NumberPadMain = () => {
    return(
       <View style={styles.pad}>
           <Text style= {{}}></Text>
      </View>
     ) 
  }


const styles = StyleSheet.create({
  
  accountBalance: {backgroundColor: 'white', padding: 20, borderRadius: 10, flexDirection: 'row', 
                   alignItems: 'center', justifyContent: 'space-between', margin: 20, flexWrap: 'wrap', borderWidth: 2,},

  pad: {},


  items: {paddingTop: 1,},
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
  }
 
});



export default AddBalance;






  


