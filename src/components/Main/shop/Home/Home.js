import React, { Component } from 'react';
import { StyleSheet , View , Text ,Button} from 'react-native';
import LocalBrand from './LocalBrand';
import ListProducts from './ListProducts';

export default function Home({navigation}) {
    return(
        <View style={{flex: 1 }}>
           <LocalBrand/>
            <ListProducts/>
        </View>   
    )  
}