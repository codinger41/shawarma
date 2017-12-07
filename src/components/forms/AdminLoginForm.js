import  React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import AdminLogin from '../../screens/AdminLogin';
export default class AdminLoginForm extends Component {
    render(){
        return(
            <View style={styles.container1}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextInput 
                    returnKeyType="next" 
                    placeholder="Username or Email" 
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="rgba(0,0,0,0)"
                 />
                <TextInput 
                    returnKeyType="go" 
                    placeholder="Password" 
                    secureTextEntry style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    underlineColorAndroid="rgba(0,0,0,0)"
                />
                <TouchableOpacity style={styles.buttoncontainer1}>
                <Text style={styles.buttonText}>
                    LOGIN ADMIN
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        padding: 20
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal:  10,
        borderRadius: 35
    },
    buttoncontainer1: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 35,
        height: 50
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900',
        fontSize: 20
    }
});