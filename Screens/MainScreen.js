import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import firebase, { database } from 'firebase';
class MainScreen extends React.Component {

    goToManagementPage = (navigate) => {
      var user = firebase.auth().currentUser;
      var userEmail = firebase.auth().currentUser.email.replace(".","");
      //console.log(userID);
      var ref = firebase.database().ref("users");
      ref.orderByChild("status").on("child_added", function(snapshot) {
        //console.log(snapshot.key + " is " + snapshot.val().status); used for testing
        if(snapshot.val().status == "manager") {
          navigate('Manager')
        }
        else if(snapshot.val().status == "regular") {
          alert('You need Manager permission!');
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