import React, { Component } from 'react';
import { StyleSheet, View, Image,  Text, KeyboardAvoidingView} from 'react-native';
import SignupForm from '../components/forms/SignupForm';

export default class Signup extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../images/logo.png')} />
                        <Text style={styles.title}  >
                            Best Place To Eat Big!
                        </Text>
                    </View>
                    <View style={styles.formContainer}>
                        <SignupForm />
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
    }
});