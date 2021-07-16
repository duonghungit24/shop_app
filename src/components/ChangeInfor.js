import React, { Component } from 'react';
import { StyleSheet , View , Text ,Button} from 'react-native';
export default function ChangeInfor({navigation}) {
    return(
        <View style={{flex: 1 , backgroundColor:'blue'}}>
            <Text>change infor</Text>
            <Button 
                title="go back to main "
                onPress={() => navigation.goBack()}
            />
        </View>   
    )  
}