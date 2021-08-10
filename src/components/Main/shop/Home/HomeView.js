import React, { Component } from 'react';
import { StyleSheet , ScrollView} from 'react-native';
import LocalBrand from './LocalBrand';
import ListProductsHot from './ListProductsHot';
import TopProducts from './TopProducts';

export default function HomeView({navigation}) {
    return(
        <ScrollView style={{flex: 1 }} showsVerticalScrollIndicator = {false}>
            <LocalBrand/>
            <ListProductsHot navigation = {navigation}/>
            <TopProducts navigation = {navigation}/>
        </ScrollView>   
    )  
}