import React, { Component } from 'react';
import { StyleSheet , View ,Button , Text} from 'react-native';
export default function Authentication({navigation}) {
    return(
        <View style={{flex: 1 , backgroundColor:'red'}}>
            <Text>Authentication</Text>
            <Button 
                title="go back to main "
                onPress={() => navigation.goBack()}
            />
        </View>   
    )  
}