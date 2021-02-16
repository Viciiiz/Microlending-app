import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
import {Button, Content, Header, Form, Input, Item, Label, Container} from 'native-base';

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

const HomeScreen = ({ navigation }) => {
  return (
    <Container styles={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>E-Mail</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </Item>
        <Button style={{marginTop: 10}}
        full rounded success >
          <Text>Log-In</Text>
        </Button>
        <Button style = {{marginTop: 10}}
        full rounded primary >
          <Text style={{color: 'white'}}>Sign-Up</Text>
        </Button>
      </Form>
    </Container>
  );
};

const ProfileScreen = ({ route }) => {
  return <Text>This is {route.params.name}'s profile (testing navigation).</Text>;
};

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
