import React, { Component } from 'react';
import {View , Text ,  } from 'react-native';


export default function CartView({navigation}) {
    const gotoDetail = () => {
        navigation.navigate('DetailProduct')
    }
    return(
        <View style = {{flex:1}}>
            <Text>Cart view</Text>
            <Text onPress={gotoDetail}>gotoDetail</Text>
        </View>
    )
}