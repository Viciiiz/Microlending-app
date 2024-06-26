import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';

class HomeScreen extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = ({
        email: '',
        password: ''
      })
    }

    //This function is used to add a new entry to the users table in Firebase DB. First we need to get the email (since we add it to the DB) in string form, and then we "update"
    //the users object in the realtime DB. The object's key should be the string of the email, and then it should have that email and their status (of management or reg user) added to
    //users object.
    writeUserData = (email, status) => {
      try {
        //var database = firebase.database();
        var userIdentifier2 = String(email);
        firebase.database().ref('users/').update({
        [userIdentifier2]: {
          user: email,
          status: status
          }
        });

      } catch (error) {
        console.log(error.toString())
      }
    }
    
    signUpUser = (email, password) =>{
      try {
        if(this.state.password.length<6) {
          alert("Please enter at least 6 chars")
          return;
        }
        else {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          
          var status = "regular"
          var email2 = email.replace(".","");
          if(email2.includes("MicroLendingMgmtcom")) { //Making assumption that only managers have the email ending of @MicroLendingMgmt.com
            status = "manager"
          }
          this.writeUserData(email2, status);
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
        alert("Could not log in; user or password is wrong")
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

//Styles go here
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

export default HomeScreen;