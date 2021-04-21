import * as React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';


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
pool: {backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20,},
poolAdd: {flexDirection:'row', alignItems:'center', flexWrap: 'wrap',},
poolText: {maxWidth: '80',},
exit: {width: 12, height: 12, borderColor: 'red', borderWidth: 2, borderRadius: 5,},

});

export default PoolCategory;

