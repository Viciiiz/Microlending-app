import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'native-base';


//This is where the user manages personal settings
class Settings extends React.Component{
  
    goToLogout = (navigate) => {
        navigate('Home')
    }

    render(){
        return (
            <View style={styles.wrapView}>
                <Text style={styles.welcomeText}>Personal Settings</Text>
                <View style={styles.statusView}>
                    <Text style={styles.statusText}>Status</Text>
                    <TextInput style={styles.statusInput}> My pleasure to help with your loan request.</TextInput>
                </View>
                <View style={styles.availabilityView}>
                    <Text style={styles.availabilityText}>Handle Requests</Text>
                    <View style={styles.dropdownView}>
                        <DropDownPicker
                            items={[
                                {label: 'Automatically accept direct requests', value: 'auto'},
                                {label: 'Manually accept direct requests', value: 'manual'},
                            ]}
                            // style = {styles.dropdown}
                            // defaultValue={this.userStatus}
                            containerStyle={styles.dropdown}
                            // style={{backgroundColor: '#fafafa'}}
                            itemStyle={styles.dropdownItem}
                            // dropDownStyle={{backgroundColor: '#fafafa'}}
                            // onChangeItem={item => this.setState({
                            //   status: item.value
                            // })}
                        />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button}>
                        <Text style={styles.buttonText}>Manage Account</Text>
                    </Button>
                    <Button style={styles.button}>
                        <Text style={styles.buttonText}>Advanced Settings</Text>
                    </Button>
                </View>
                <View style={styles.endButtons}>
                    <TouchableOpacity style={styles.logoutButton}
                    onPress={()=>this.goToLogout(this.props.navigation.navigate)}>
                        <Text style={styles.logoutText}>Log-Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton}>
                        <Text style={styles.deleteText}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


//Styles go here
const styles = StyleSheet.create({
    availabilityText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginBottom: 5
    },
    availabilityView:{
        marginTop: 5,
    },
    button: {
        // flex: 1,
        // margin: 10,
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 60,
        borderWidth: 1,
        borderBottomColor: 'white',
        borderTopColor: 'white',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 10
        // marginHorizontal: 15,
        // borderRadius: 10,
        // marginTop: 40
    },
    buttonText: {
        fontSize: 19,
        color: 'white'
    },
    buttonView: {
        marginTop: 95
    },
    deleteButton:{
        backgroundColor: 'red',
        justifyContent: 'center',
        margin: 10,
        width: '45%',
        // alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    deleteText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    },
    dropdown: {
        width: '75%',
        // flex:1,
        height: 40,
        // margin
    },
    dropdownItem: {
        width: '100%',
        // flex:1,
        height: 40,
        // justifyContent: 'left'
    },
    dropdownView: {
        // alignItems: 'flex-start',
        marginEnd: 10,
        marginLeft: 10
    },
    endButtons: {
        flexDirection: 'row',
        // flex: 1,
        // justifyContent: 'flex-end',
        // marginTop: 200,
        // marginBottom: 70
        height: 70,
        position: 'absolute',
        bottom: 5
    },
    logoutButton: {
        backgroundColor: 'white',
        width: '45%',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    logoutText: {
        color: 'red',
        margin: 10,
        fontWeight: 'bold',
        fontSize: 17
    },
    statusInput: {
        borderWidth: 1,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'lightgrey',
        color: 'black'
    },
    statusText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        marginBottom: 5
    },
    statusView: {
        marginTop: 0
    },
    themeText: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white'
    },
    themeView: {
        marginTop: 10,
        flexDirection: 'row'
    },
    welcomeText: {
        fontStyle: 'italic',
        fontSize: 35,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    wrapView: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default Settings;