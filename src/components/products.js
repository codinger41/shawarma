import React, { Component } from 'react';
import {View,  StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';

let data;
    fetch('http://shawarma01.herokuapp.com/products')  
    .then(function(response) {
    return response.json()
    });

export default class Products extends Component {
    render(){
        return(
            <ScrollView style={styles.scroll}>
            <Card style={{ backgroundColor: '#5D4037' }} dataArray={data}
                renderRow={(data) =>
                    <CardItem style={{ backgroundColor: '#5D4037' }} >
                        <Thumbnail source={data.image} />
                        <Text style={styles.text}>{data.name}</Text>
                        <Button style={{backgroundColor: '#5D4037',marginLeft: 30}}
                        > 
                        <Icon  style={{ marginLeft: 80, color: '#fff' }}  name='trash'
                        />
                        </Button>
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