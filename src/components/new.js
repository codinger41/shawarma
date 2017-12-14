import React, { Component } from 'react';
import  { StyleSheet, Image, View, TextInput, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView }  from 'react-native';


export default class New extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: '',
            price: '',
        }
        this._postProduct = this._postProduct.bind(this);
    }
    
    _postProduct() {
        if(!this.state.name || !this.state.price){
            alert('Name and Price cannot be empty!')
        }else{
        fetch('https://shawarma01.herokuapp.com/api/products', {  
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                price: this.state.price,
            })
        });
        alert(`${this.state.name} has been added successfully!`)
    }
    }


    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}  >
                    Add New Product
                </Text>
            </View>
            <View style={styles.formContainer}>
                    <View style={styles.container1}>
                    <StatusBar
                        barStyle="light-content"
                    />
                    <TextInput 
                        returnKeyType="next" 
                        placeholder="Product Name" 
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={(text) => this.setState({name:text})}
                    />
                    <TextInput 
                        returnKeyType="next" 
                        placeholder="Product Price" 
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={(text) => this.setState({price:text})}
                    />
                    <TouchableOpacity 
                    style={styles.buttoncontainer1}
                    onPress={this._postProduct}
                    >
                    <Text  
                    style={styles.buttonText}>
                        ADD PRODUCT
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
        textAlign: 'center',
        fontSize: 30
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
