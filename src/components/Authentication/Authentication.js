import React, { Component , useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';


const {height, width} = Dimensions.get("window");

export default function Authentication({ navigation }) {
    [active, setActive] = useState(true);
    const signIn = () => {
        setActive(true);
    }
    const signUp = () => {
        setActive(false);
    }
  const {
    container,
    header,
    body,
    footer,
    textSignIn,
    textInput,
    textContainer,
    input,
    btnLogin,
    textLogin,
    textFooter,
    btnFooter,
    btn,
    textBtn,
    icon,
    noActive
  } = styles;
  return (
    <KeyboardAvoidingView style={container} >
      <View style={header}>
        <Text>Avatar shop</Text>
      </View>
      <View style={body}>
        <View style={textContainer}>
          <Text style={textSignIn}>Sign in your account</Text>
        </View>
        <View>
          <View>
            <Text style={textInput}>Email</Text>
            <TextInput style = {input} placeholder="Your emails address" />
          </View>
          <View>
            <Text style={textInput}>Password</Text>
            <TextInput style = {input}  placeholder="Your Password" />
          </View>
        </View>
        <Pressable style = {btnLogin}>
            <Text style = {textLogin}>Login</Text>
        </Pressable>
      </View>
      <View style={footer}>
        <Text style = {textFooter}>or login using social media</Text>
        <View style = {icon}>
            <Icon name = "facebook" color = 'red' size = {25} style = {{marginRight:25}}/>
            <Icon name = "google"  size = {25} style = {{marginLeft:25}}/>
        </View>
        <View style = {btnFooter}>
          <Pressable style = {active ? btn : noActive} onPress={signIn}>
            <Text style = {textBtn}>Sign in</Text>
          </Pressable>
          <Pressable style = {active ? noActive : btn} onPress={signUp}>
            <Text style = {textBtn}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
  
    padding: 10,
  },
  footer: {
    flex: 1,
  },
//body 
  textSignIn: {
    textAlign:'center',
    fontSize: 20,
    color: "#353535",
  },
  textInput: {
    padding: 5,
    color: "#353535",
    fontSize: 16,
  },
  textContainer: {
    marginBottom:20,
  },
  input: {
      height:height*0.07,
      color: "#555b6e",
      padding: 10,
      marginBottom : 10,
      borderBottomWidth:1,
      borderBottomColor:'#f2f2f2'
  },
  btnLogin: {
    height:height*0.07,
    backgroundColor: "#43aa8b",
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 50,
  },
  textLogin: {
      color:'#fff', 
      textAlign:'center',
  },
//footer
  textFooter : {
    flex:1,
    textAlign:'center',
    fontSize:17,
  },
  btnFooter : {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      bottom: 0,
  },
  btn: {
    height:height*0.07,
    backgroundColor: "#43aa8b",
    justifyContent: 'center',
    borderRadius:50,
    width:'45%',
  },
  textBtn : {
      textAlign:'center', 
      color: "#ffff",
  },
  icon: {
      flex:1, 
      justifyContent:'center',
      flexDirection:'row',
  },
  noActive : {
    height:height*0.07,
    color: "#000000",
    backgroundColor: "#d9d9d9",
    justifyContent: 'center',
    borderRadius:50,
    width:'45%',
  }
});
