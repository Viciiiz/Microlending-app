import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';
import { render } from 'react-dom';

//here we establish connection to firebase.
const firebaseConfig = {
  apiKey: "AIzaSyB7fXfYE4BuVeWWaTNaRPlFvMKXlSkX298",
  authDomain: "microlending-9a33b.firebaseapp.com",
  databaseURL: "https://microlending-9a33b-default-rtdb.firebaseio.com",
  projectId: "microlending-9a33b",
  storageBucket: "microlending-9a33b.appspot.com",
  messagingSenderId: "846587248834",
  appId: "1:846587248834:web:319b97453b3bef3978bb5b"
};

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

  
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) =>{
    try {
      if(this.state.password.length<6) {
        alert("Please enter at least 6 chars")
        return;
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
      }
    } catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        console.log(user)
      })
    } catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
  <Container style={styles.container}>
    <Text style={styles.header}>Welcome: Microlending</Text>
      <Form>
        <Item floatingLabel>
          <Label style={ {color: 'white'} }>E-Mail</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
          />
        </Item>
        <Item floatingLabel>
          <Label style={ {color: 'white'} }>Password</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </Item>
        <Button style={{ marginTop: 10 }}
        full rounded success 
        onPress ={()=> this.loginUser(this.state.email, this.state.password)}
        >
          <Text style = {{ color: 'white' }}>Log-In</Text>
        </Button>
        <Button style = {{marginTop: 10}}
        full rounded primary 
        onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
        >
          <Text style={{color: 'white'}}>Sign-Up</Text>
        </Button>
      </Form>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    padding: 10
  },

  header: {
    color: 'white',
    fontSize: 40,
    justifyContent: 'center',
  }
});
