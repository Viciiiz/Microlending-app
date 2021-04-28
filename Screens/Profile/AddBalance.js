import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
  

class AddMicroDollars extends React.Component {


state = {
 accountBalance: '',
};

_onPress1(pressId) {
  let bal = this.state.accountBalance; 
 
// eval = the math function
  if(pressId === '=' || pressId === 'submit') { bal = eval(bal);
  } else if (pressId === 'CLEAR') {bal = null  
  } else { bal += pressId}
          
    this.setState({accountBalance: bal,});
}


 render() {
  return (

    <View style={styles.container}>
    
    <View style={styles.accountBalance}>
          <Text style={{color: 'black',fontSize: 40,fontWeight: '200',}}>$</Text>
           <Text style={{color: 'black',fontSize: 40,fontWeight: '200',}}>{this.state.accountBalance}</Text>
           
       </View>

           <View style={styles.addMicro}>
          
          <View style={{flexDirection:"row", justifyContent: 'space-around',alignContent: 'center', paddingLeft: 30,paddingRight: 30,}}>

              <PressExt id= {5} onPress1={this._onPress1.bind(this)} />
              <PressExt id= {10} onPress1={this._onPress1.bind(this)} />
              <PressExt id= {20} onPress1={this._onPress1.bind(this)} />
             
           </View>

            <View style={styles.addMicro}>
                <View style={{flexDirection:"row", justifyContent: 'space-around', alignContent: 'center', paddingLeft: 65,paddingRight: 65,}}>

                    <PressExt id= {50} onPress1={this._onPress1.bind(this)} />
                    <PressExt id= {100} onPress1={this._onPress1.bind(this)} />
                    
                </View>
              </View>

                <View style={{flexDirection:"row", justifyContent: 'space-around', alignContent: 'center',
                  paddingLeft: 10,paddingRight: 10, bottom: 1,}}> 
                
                  <PressExt id= {'CLEAR'} onPress1={this._onPress1.bind(this)} colorc2={true}/>
                  <PressExt id= {'submit'} onPress1={this._onPress1.bind(this)} colorc={true}/>
                  

               
             </View>
        </View>

      <View style={styles.headings}>
          <Text style={styles.mainheader}>Add Balance</Text>
          <Text style={{color: 'white',fontSize: 25, fontWeight: '500', textAlign: 'center', }}>Add Micro-Dollars Below</Text>
       </View>

    </View>
  );
}
}


  const PressExt = ({id, onPress1, colorc, colorc2}) => {
      return (
      <TouchableOpacity style={[styles.press, {backgroundColor: (colorc ? '#39FF14' : '#f8f8ff')}]} 
        onPress={() => {onPress1(id); }}>
        <Text style={styles.currency}>{id}</Text>
      </TouchableOpacity>
       
      
      )
    }
   
  


const styles = StyleSheet.create({
  
accountBalance: {backgroundColor: 'white', padding: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', margin: 20, flexWrap: 'wrap', borderWidth: 5, borderColor: '#39FF14', top: 150,},

press: {backgroundColor:'#f8f8ff', justifyContent: 'center', alignContent: 'center', borderWidth: 2, borderRadius: 60, width: 65, height: 65, margin: 8, borderColor: '#39FF14', top: 150,},


currency: {fontSize: 16, textAlign: 'center',},



 
headings: {height: '100%', bottom: 320,},

mainheader: {color: '#ccc',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    margin: 5,
    marginBottom: 5,
    
    flexDirection: 'row',},

  items: {paddingTop: 1,},
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 1,
  },

 
 
});

export default AddMicroDollars;
