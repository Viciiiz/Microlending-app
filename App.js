import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';
import { render } from 'react-dom';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

class HomeScreen extends React.Component {
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

  loginUser = (email, password, navigate) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) { 
      console.log(user);
      navigate('Main')
      })
    } catch (error) {
      console.log(error.toString())
    }
  }

  forgotPassword = (email) => {
    try {
      var auth = firebase.auth();
      //var emailAddress = email;
      auth.sendPasswordResetEmail(email).then(function(user) {
        console.log('Reset email sent!');
      })
    } catch (error) {
      console.log('Error');
    }
  }

  render() {
    return (  
    <Container style={styles.container}>
      <Text style={styles.header}>Welcome to MicroLending!</Text>
        <Form>
          <Item floatingLabel>
            <Label style={ {color: 'white'} }>E-Mail</Label>
            <Input
              style={ {color: 'white'} }
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item floatingLabel>
            <Label style={ {color: 'white'} }>Password</Label>
            <Input
              style={ {color: 'white'} }
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <Button style={{ marginTop: 10 }}
          full rounded success 
          onPress ={()=> this.loginUser(this.state.email, this.state.password,this.props.navigation.navigate)}
          >
            <Text style = {{ color: 'white' }}>Log-In</Text>
          </Button>
          <Button style = {{marginTop: 10}}
          full rounded primary 
          onPress = {()=> this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{color: 'white'}}>Sign-Up</Text>
          </Button>
          <Button style = {{marginTop: 10}}
          full rounded danger onPress = {()=> this.forgotPassword(this.state.email)} >
            <Text style={{color: 'white'}}>
              Forgot Password
            </Text>
          </Button>
        </Form>
      </Container>
      );
  }
}

class MainScreen extends React.Component {
  render() {
    return (
      <Container style={styles2.container}>
        <Text style={styles2.mainManagerHeader}>Manager</Text>
        <Button full rounded success>
          <Text style = {{color:'white'}}>
            Go to Management Page
          </Text>
        </Button>
        <Text style={styles2.mainRegularHeader}>User</Text>
        <Button full rounded success>
          <Text style = {{color:'white'}}>
            Go to regular user Page
          </Text>
        </Button>
        <Container style={styles2.bottomSpace}></Container>
      </Container>
    )
  }
}

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Main: MainScreen
  },
    {
      initialRouteName: 'Home'
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  //Beneath here are the styles for the home page (aka login)
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

})

const styles2 = StyleSheet.create({
  //here is where we edit the styling of the main page (after log in)
  container: {
    backgroundColor:'#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainManagerHeader: {
    flex: 1,
    color: 'white',
    padding: 1,
    fontSize: 30
  },
  mainRegularHeader: {
    flex: 1,
    color: 'white',
    padding: 1,
    fontSize: 30
  },
  bottomSpace: { //this container is used to keep buttons above the ios home button.
    flex: 1
  }
})

