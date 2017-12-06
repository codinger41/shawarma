import  React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render(){
        return(
            <View style={styles.container}>
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
                 />
                <TextInput 
                    returnKeyType="go" 
                    placeholder="Password" 
                    secureTextEntry style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} >
                    LOGIN
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} >
                    ENTER AS GUEST
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#fff',
        paddingHorizontal:  10
    },
    buttonContainer: {
        backgroundColor: '#e74c3c',
        paddingVertical: 10,
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '900'
    }
});