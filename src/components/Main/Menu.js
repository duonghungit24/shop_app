import React, { Component  , useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

const { width, height } = Dimensions.get("window");

export default function Menu(props) {
  const [ islogedIn , setLogIn] = useState(true);
  const gotoAuthenticaiton = () => {
    props.navigation.navigate("Authentication");
  };
  const gotoChangeInfor = () => {
    props.navigation.navigate("ChangeInfor");
  };
  const gotoOrderHistory = () => {
    props.navigation.navigate("OrderHistory");
  };
  const {
    container,
    imgProfile,
    button,
    textView,
    btn,
    headerProfile,
    textHeader,
  } = styles;
  const {containerLogOut , containerTextHeader} = styles;
  const logIn = (
    <View style={btn}>
      <Pressable onPress={() => gotoAuthenticaiton()} style={button}>
        <Text style={textView}>Sign In</Text>
      </Pressable>
    </View>
  );
  const logOut = (
    <View style={containerLogOut}>
      <View style={containerTextHeader}>
           <Text style={textHeader}>Dương Hùng</Text>
      </View>
     
      <View style={btn}>
        <Pressable onPress={() => gotoOrderHistory()} style={button}>
          <Text style={textView}>Order History</Text>
        </Pressable>
    </View>
    <View style={btn}>
        <Pressable onPress={() => gotoChangeInfor()} style={button}>
          <Text style={textView}>Change Infor</Text>
        </Pressable>
    </View>
    <View style={btn}>
        <Pressable onPress={() => setLogIn(false)} style={button}>
          <Text style={textView}>Sign out</Text>
        </Pressable>
    </View>
   </View>
  );
  return (
    <View style={container}>
      <View style={headerProfile}>
        <Image style={imgProfile} source={require("../../media/avatar.jpg")} />
      </View>
      {islogedIn ? logOut : logIn}
    </View>
  );
}


const buttonHieight = height * 0.08;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerProfile: {
    alignSelf: "center",
    marginTop: 50,
  },
  textHeader: {
    fontSize: 17,
    color:'white',
  },
  imgProfile: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  button: {
    height: buttonHieight,
    backgroundColor: "#43aa8b",
    justifyContent: "center",
    borderRadius: 10,
  },
  btn: {
    padding:10,
  },
  textView: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  containerTextHeader : {
    marginTop:10,
    marginBottom:40,
    alignItems:'center'
  }
});
