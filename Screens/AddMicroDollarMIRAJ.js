import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
  

export default function App() {
  return (

    <View style={styles.container}>

      <View style={{padding:30}}>
          <Text style={{color: 'black',fontSize: 50,fontWeight: '100',}}>Welcome:</Text>
          <Text style={{color: 'black',fontSize: 25, fontWeight: '500', paddingTop: 15,}}>Your Micro-Dollar Balance:</Text>
       </View>

          <View style={styles.items}>
            <AccountBalance/>
          </View>

    </View>
  );
}
 const AccountBalance = () => {
    return(
       <View style={styles.accountBalance}>
           <Text style={{color: 'black',fontSize: 40,fontWeight: '200',}}>00</Text>
       </View>
     ) 
  }

  const AddCurrency = () => {
    return (
      <View>
        <Text></Text>
      </View>
    )

  }

  const OpenClose = () => {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  
  accountBalance: {backgroundColor: 'white', padding: 20, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20, flexWrap: 'wrap', borderWidth: 2,},

  items: {paddingTop: 1,},

  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 40,
  }
 
});
