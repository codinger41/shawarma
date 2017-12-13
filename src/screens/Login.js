import React, { Component } from 'react';
import  { StyleSheet, Image, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView }  from 'react-native';

export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../images/logo.png')} />
                        <Text style={styles.title}  >
                            Best Place To Eat Big!
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
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
                            <TouchableOpacity
                            style={styles.buttoncontainer1}
                            onPress={() => navigate("Dashboard", {title: 'welcoen'})}
                            >
                            <Text
                            style={styles.buttonText}>
                                LOGIN
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5D4037'
    },
    logo: {
        width: 300,
        height: 100
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 160,
        textAlign: 'center'
    },
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
