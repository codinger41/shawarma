import React, { Component } from 'react';
import {View,  StyleSheet, ScrollView, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';

    let data = [
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
        {
            name: 'Shawarma',
            image: require('../images/logo.png'),
        },
    ];
    
    export default class Sales extends Component {
        render(){
            return(
                <ScrollView style={styles.scroll}>
                <Card style={{ backgroundColor: '#5D4037' }} dataArray={data}
                    renderRow={(data) =>
                        <CardItem style={{ backgroundColor: '#5D4037' }} >
                            <Thumbnail source={data.image} />
                            <Text style={styles.text}>{data.name}</Text>
                        </CardItem>
                    }>
                </Card>
                </ScrollView>
            )   
        }
    }

    const styles = StyleSheet.create({
        text: {
            paddingLeft: 20,
            fontSize: 30,
            color: '#fff'
        }
    })