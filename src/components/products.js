import React, { Component } from 'react';
import { Container, View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Products extends Component {
    render(){
        return(
            <ScrollView>
            <View style={styles.title}>
                <Text style={styles.title}  >Products</Text>
            </View>
            </ScrollView>
        )   
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: '#b5b5b5',
    }
})