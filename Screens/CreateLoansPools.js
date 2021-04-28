//import * as React from 'react';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  ScrollView,
  navigation,
} from 'react-native';

function CreateLoansPools() {
  const [entry, setEntry] = useState('');
  const [entryItems, setEntryItems] = useState([]);

  const addEntry = () => {
    Keyboard.dismiss();
    setEntryItems([...entryItems, entry]);
    setEntry('');
  };

  const deleteEntry = (index) => {
    let poolsEntry = [...entryItems];
    poolsEntry.splice(index, 1);
    setEntryItems(poolsEntry);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          <Text style={styles.header}>Loans Category</Text>

          <View style={styles.entry}>
  
           
            {entryItems.map((pool, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => deleteEntry(index)}>
                  <PoolCategory text={pool} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.kbm}>
        <TextInput
          style={styles.input1}
          placeholder={'Enter Loan'}
          value={entry}
          onChangeText={(text) => setEntry(text)}
        />

        <TouchableOpacity onPress={() => addEntry()}>
          <View style={styles.submit}>
            <Text style={styles.logo}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const PoolCategory = (props) => {
  return (
    <View style={styles.pool}>
      <View style={styles.poolAdd}>
        <Text style={styles.poolText}> Loan : {props.text} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  main: { paddingTop: 50, paddingHorizontal: 15 },
  header: {
    color: '#d3d3d3',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    margin: 1, 
    marginBottom: '10%',
  },
  entry: { marginTop: 5 },

  pool: {
    backgroundColor: 'white',
    borderBottomColor: 'red',
    borderTopColor: '#d3d3d3',
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    borderWidth: 5,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 2,
  },

  poolAdd: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },

  poolText: { maxWidth: 80 }, //////

  kbm: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    width: 100, /////
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input1: {
    paddingVertical: 15,
    width: 220,
    paddingHorizontal: '15%', /////
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    borderBottomColor: 'red',
    borderWidth: 5,
    left: 5,
    borderTopColor: '#d3d3d3',
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    bottom: 75,
  },

  submit: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    left: 30,
    justifyContent: 'center',
    borderBottomColor: '#39FF14',
    borderWidth: 5,
    borderTopColor: '#d3d3d3',
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    bottom: 75,
  },

  logo: { textAlign: 'center' },
});

export default CreateLoansPools;
