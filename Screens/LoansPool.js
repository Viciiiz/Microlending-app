import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

// You can import from local files
import PoolCategory from './components/pool';

// or any pure javascript modules available in npm 
import { Card } from 'react-native-paper';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  main: {paddingTop: 65, paddingHorizontal: 15, },
  header: { fontSize: 24, fontWeight: 'Bold',},
  items: {marginTop: 20,}

});
