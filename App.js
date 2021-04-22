import * as React from 'react';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Screens/MainScreen';
import ManagerScreen from './Screens/ManagerScreen';
import RegUserScreen from './Screens/RegUserScreen';
import HomeScreen from './Screens/HomeScreen';
import LoanPoolsScreen from './Screens/LoanPoolsScreen';
import AmountSpecificationScreen from './Screens/Requesting Loan/AmountSpecificationScreen';
import DateSpecification from './Screens/Requesting Loan/DateSpecification';
import PaymentFrequency from './Screens/Requesting Loan/PaymentFrequency';
import VerificationScreen from './Screens/Requesting Loan/VerificationScreen';
import InterestScreen from './Screens/Requesting Loan/InterestScreen';
import SummaryScreen from './Screens/Requesting Loan/SummaryScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ReceivedRequests from './Screens/ReceivedRequests';
import GeneralRequests from './Screens/GeneralRequests';
import Profile from './Screens/Profile/Profile';
import AddBalance from './Screens/Profile/AddBalance';
import TransactionHistory from './Screens/Profile/TransactionHistory';
import Lending from './Screens/Lending/Lending';
import LendingSummary from './Screens/Lending/LendingSummary';
import LendingConfirmation from './Screens/Lending/LendingConfirmation';
import SentRequests from './Screens/SentRequests';

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
    RegUser: RegUserScreen,
    LoanPools: LoanPoolsScreen,
    AmountScreen: AmountSpecificationScreen,
    DateScreen: DateSpecification,
    PaymentPlan: PaymentFrequency,
    Verification: VerificationScreen,
    Interest: InterestScreen,
    Summary: SummaryScreen,
    Settings: SettingsScreen,
    ReceivedRequests: ReceivedRequests,
    GeneralRequests: GeneralRequests,
    Profile: Profile,
    AddBalance: AddBalance,
    History: TransactionHistory,
    Lending: Lending,
    LendingSummary: LendingSummary,
    LendingConfirmation: LendingConfirmation,
    SentRequests: SentRequests
  },
    {
      initialRouteName: 'Main'//'Home'
    });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


