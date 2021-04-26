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

function CreateInterest() {
  const [entry, setEntry] = useState('');
  const [entry2, setEntry2] = useState('');

  const [entryItems, setEntryItems] = useState([]);
  const [entryItems2, setEntryItems2] = useState([]);

  const addEntry = () => {
    Keyboard.dismiss();
    setEntryItems2([...entryItems2, entry2]);
    setEntry2('');
  };

  const deleteEntry = (index) => {
    let poolsEntry = [...entryItems2];
    poolsEntry.splice(index, 1);
    setEntryItems2(poolsEntry);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          <Text style={styles.header}>Interest Rate</Text>

          <View style={styles.entry}>
            {entryItems2.map((pool2, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => deleteEntry(index)}>
                  <PoolCategory text2={pool2} />
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
          style={styles.input2}
          keyboardType="numeric"
          placeholder={'Enter Rate'}
          value={entry2}
          onChangeText={(text2) => setEntry2(text2)}
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
        <Text style={styles.poolText}> Loan: </Text>
      </View>
      <View style={styles.pool2}>
        <View style={styles.poolAdd2}>
          <Text style={styles.poolText2}> {props.text2} % </Text>
        </View>
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
    margin: 1,////////
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
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 2,
  },

  pool2: {
    backgroundColor: 'white',
    borderBottomColor: 'red',
    borderTopColor: '#d3d3d3',
    borderLeftColor: '#d3d3d3',
    borderRightColor: '#d3d3d3',
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 3,
  },

  poolAdd: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },

  poolText: { maxWidth: 80 }, ///////

  poolAdd2: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },

  poolText2: { maxWidth: 80 }, //////

  kbm: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    width: 100,  ////////
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input2: {
    paddingVertical: 15,
    width: 220,
    paddingHorizontal: '15%', //////
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 60,
    borderBottomColor: 'red',
    borderWidth: 5,
    left: 15,
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

export default CreateInterest;
