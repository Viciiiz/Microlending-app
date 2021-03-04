import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Screens/MainScreen';
import ManagerScreen from './Screens/ManagerScreen';
import RegUserScreen from './Screens/RegUserScreen';
import HomeScreen from './Screens/HomeScreen';

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

//This Stacknavigator is where you specify the names of the pages the app will navigate through. Initialroute is defined (the very first log-in page)
const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Main: MainScreen,
    Manager: ManagerScreen,
    RegUser: RegUserScreen
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


