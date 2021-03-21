import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import firebase from 'firebase';
import 'react-navigation'; 
import 'react-navigation-stack';

class MainScreen extends React.Component {


    goToManagementPage = (navigate) => {
      //var user = firebase.auth().currentUser;
      var userEmail = firebase.auth().currentUser.email.replace(".","");
      
      var ref = firebase.database().ref("users");
      ref.orderByChild(userEmail).on("child_added", function(snapshot) {
        var snapshotVal = snapshot.val();
        //console.log(snapshotVal);
        var currentlyManager = false;
        //Firebase snapshot of users object is turned into JS object, and then we iterate line by line. If prev line confirms manager status
        //,then we check if the email is correct. If both are correct, only then can user navigate to management page.
        for (const [key,value] of Object.entries(snapshotVal)) {          
          if(key === "status" && value==="manager") {
            currentlyManager = true;
          }
          else if(key==="user" && value.toLowerCase()===userEmail && userEmail.includes("@microlendingmgmtcom") && currentlyManager === true) {
              navigate('Manager');
              //console.log("CORRECT" + key + value); line used in testing
          }
          else {
            currentlyManager = false;
          }
        }
        
      });
    }
    
    goToRegUserPage = (navigate) => {
      navigate('RegUser')
    }
  
    render() {
      return (
        <Container style={styles2.container}>
          <Text style={styles2.mainManagerHeader}>Manager</Text>
          <Button full rounded success onPress = {()=> this.goToManagementPage(this.props.navigation.navigate)}>
            <Text style = {{color:'white'}}>
              Go to Management Page
            </Text>
          </Button>
          <Text style={styles2.mainRegularHeader}>User</Text>
          <Button full rounded success onPress = {()=> this.goToRegUserPage(this.props.navigation.navigate)} >
            <Text style = {{color:'white'}} >
              Go to regular user Page
            </Text>
          </Button>
          <Container style={styles2.bottomSpace}></Container>
        </Container>
      )
    }
  }

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

  export default MainScreen;