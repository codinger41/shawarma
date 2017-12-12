import React, { Component } from 'react';
import { Container, View, Text, StyleSheet } from 'react-native';

export default class Products extends Component {
    render(){
        return(
            <View>
                <Text style={styles.title}  >Products</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#b5b5b5',
        flex: 1
    }
})