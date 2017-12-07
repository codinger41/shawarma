import React, { Component } from 'react';
import { StyleSheet, View, Image,  Text, KeyboardAvoidingView} from 'react-native';

export default class Dashboard extends Component {
    render() {
        return (
            
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