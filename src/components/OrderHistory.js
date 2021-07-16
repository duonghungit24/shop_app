import React, { Component } from 'react';
import { StyleSheet , View , Text ,Button} from 'react-native';
export default function OrderHistory({navigation}) {
    return(
        <View style={{flex: 1 , backgroundColor:'green'}}>
            <Text>order history</Text>
            <Button 
                title="go back to main "
                onPress={() => navigation.goBack()}
            />
        </View>   
    )  
}