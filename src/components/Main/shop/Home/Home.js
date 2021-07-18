import React, { Component } from 'react';
import { StyleSheet , ScrollView} from 'react-native';
import LocalBrand from './LocalBrand';
import ListProducts from './ListProducts';
import TopProducts from './TopProducts';
export default function Home({navigation}) {
    return(
        <ScrollView style={{flex: 1 }} showsVerticalScrollIndicator = {false}>
            <LocalBrand/>
            <ListProducts/>
            <TopProducts/>
        </ScrollView>   
    )  
}