import React, { Component } from 'react';
import {View,  StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';



export default class Products extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        fetch("https://shawarma01.herokuapp.com/api/products")
            .then((res) => res.json())
            .then((res) => {
            console.log(res);
            this.setState({
                products: res
            });
            })
            .done();
        }

    render(){
        const Product = this.state.products
        return(
            <ScrollView style={styles.scroll}>
            <Card style={{ backgroundColor: '#5D4037' }} dataArray={Product}
                renderRow={(Product) =>
                    <CardItem style={{ backgroundColor: '#5D4037' }} >
                        <Thumbnail source={require('../images/icon.png')} />
                        <Text style={styles.text}>{Product.name}</Text>
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