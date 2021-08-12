import React, { Componen, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export default function CartView({ navigation, route }) {
  const {
    container,
    wrapProduct,
    checkout,
    img,
    nameText,
    iconUpDow,
    leftText,
    iconClose,
    sizeText,
    textTotal,
    totalPrice,
    money,
    wrapTotal,
    sumTotal,
    btnCheckOut,
    textBtn,
  } = styles;
  const { listProduct } = route.params;
  const [amount, setAmount] = useState(1);
  const [activeUp , setActiveUp] = useState(false)
  const [activeDown , setActiveDown] = useState(false)
  const upProduct = () => {
    setActiveDown(false);
    setActiveUp(true);
    setAmount(amount + 1);
  };
  const decreaseProduct = () => {
    setActiveUp(false);
    setActiveDown(true);
    if (amount == 1) 
    {
      setActiveDown(false);
      return;
    }
      
    else {
      setAmount(amount - 1);
    }
  };
  return (
    <View style={container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {listProduct.map((product, index) => (
          <View style={wrapProduct} key={index}>
            <Image style={img} source={product.imgUrl} />
            <View style={{ marginLeft: 15, justifyContent: "space-around" }}>
              <Text style={nameText}>{product.name}</Text>
              <Text style={{ fontSize: 16 }}>{product.price}</Text>
              <View style={iconUpDow}  >
                <Ionicons
                  name={ activeDown ? "remove-circle" : "remove-circle-outline"}
                  color="#2a9d8f"
                  size={25}
                  onPress={decreaseProduct}
            
                />
                <Text style={{ margin: 5 }}>{amount}</Text>
                <Ionicons
                  name={activeUp ? "add-circle" : "add-circle-outline"}
                  color="#2a9d8f"
                  size={25}
                  onPress={upProduct}
                />
              </View>
            </View>
            <View style={leftText}>
              <Ionicons
                style={iconClose}
                name="close-circle-outline"
                color="#2a9d8f"
                size={25}
              />
              <Text style={sizeText}>{product.size}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={checkout}>
        <View style={wrapTotal}>
          <Text style={textTotal}>Sub Total</Text>
          <Text style={money}>500.000 Vnd</Text>
        </View>
        <View style={wrapTotal}>
          <Text style={textTotal}>Shipping</Text>
          <Text style={money}>30.000 Vnd</Text>
        </View>
        <View style={wrapTotal}>
          <Text style={sumTotal}>Total</Text>
          <Text style={totalPrice}>580.000 Vnd</Text>
        </View>
        <Pressable style={btnCheckOut}>
          <Text style={textBtn}>Proceed Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapProduct: {
    flexDirection: "row",
    height: height / 6,
    backgroundColor: "#fff",
    margin: 10,
    marginBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    borderRadius: 10,
  },
  img: {
    width: (width - 20) * 0.3,
    height: height / 6,
    resizeMode: "cover",
    borderRadius: 10,
  },
  nameText: {
    fontSize: 18,
  },
  iconUpDow: {
    flexDirection: "row",
  },
  leftText: {
    position: "absolute",
    right: 0,
  },
  iconClose: {
    position: "absolute",
    right: 0,
  },
  sizeText: {
    position: "absolute",
    fontSize: 16,
    right: 10,
    bottom: -(height / 6 - 10),
  },
  checkout: {
    height: height - 4 * (height / 6) - 40,
    backgroundColor: "#fff",
    margin: 10,
  },
  textTotal: {
    fontSize: 18,
  },
  sumTotal: {
    fontSize: 20,
  },
  totalPrice: {
    fontSize: 20,
  },
  money: {
    fontSize: 16,
  },
  wrapTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  btnCheckOut: {
    position: "absolute",
    width: width - 20,
    padding: 12,
    backgroundColor: "#43aa8b",
    borderRadius: 20,
    bottom: 5,
  },
  textBtn: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});
