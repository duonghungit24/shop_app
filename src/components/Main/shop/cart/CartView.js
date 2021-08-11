import React, { Component } from 'react';
import {View , Text ,StyleSheet, Image } from 'react-native';


export default function CartView({navigation ,route}) {
    const {container} = styles;
    const {imgUrl, name ,price} = route.params;
    return(
        <View style={container}>
            <View>
                   
            </View>
            <View>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})