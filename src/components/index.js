import React ,{ Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Products from './products';
import ProductDetails from './ProductDetails';

const Index = StackNavigator({
    Products: {screen: 'Products'},
    ProductDetails: {screen: 'ProductDetails'}
});

export default Index;