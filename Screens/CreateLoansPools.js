import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

//For the manager to create loans

export default function App() {
  return (
    <View style={styles.container}>

        <View style={styles.main}>
          <Text style={styles.header}>Loan Categories:</Text>
          
          <View style={styles.items}>
              <PoolCategory text={'Pool Entry 1'} />
              <PoolCategory text={'Pool Entry 2'} />
          </View>
        </View>

    </View>
  );
}


const PoolCategory = (props) => {
return (

<View style={styles.pool}>
      <View style={styles.poolAdd}>
        <Text style={styles.poolText}>{props.text}</Text>
  </View>
      <View style={styles.exit}></View>
  </View>
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  main: {paddingTop: 65, paddingHorizontal: 15, },
  header: { fontSize: 24, fontWeight: 'Bold',},
  items: {marginTop: 20,},

  pool: {backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20,},
  poolAdd: {flexDirection:'row', alignItems:'center', flexWrap: 'wrap',},
  poolText: {maxWidth: '80',},
  exit: {width: 12, height: 12, borderColor: 'red', borderWidth: 2, borderRadius: 5,},

});
