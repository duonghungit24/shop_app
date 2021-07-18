import React, { Component , useState } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const { height, width } = Dimensions.get("window");
const imageList = [
  { id: 1, url: require("../../../../media/hot1.jpg") },
  { id: 2, url: require("../../../../media/hot2.jpg") },
  { id: 3, url: require("../../../../media/hot3.jpg") },
  { id: 4, url: require("../../../../media/hot4.jpg") },
];

export default function ListProducts() {
  const { wrapper, textWrap, img, imgWrap, text , wrapdot , dotActive, dot } = styles;
  const [imgActive, setImgActive] = useState(0);
  const onchange = (nativeEvent) => {
      if(nativeEvent) {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imgActive)
         { 
           setImgActive(slide);
         }
      }
  }
  return (
    <View style={wrapper}>
      <View style={textWrap}>
        <Text style={text}>List Products Hot</Text>
      </View>
      <View style={imgWrap}>
        <ScrollView
          onScroll = {({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {imageList.map((image, index) => (
            <Image
              key={image}
              style={img}
              resizeMode="stretch"
              source={image.url}
            />
          ))}
        </ScrollView>
        <View style = {wrapdot}>
            { 
              imageList.map((image,index) => 
                <Text
                  key = {image}
                  style = {imgActive == index ? dotActive : dot}
                >
                  o
                </Text>
              )
            }
        </View>
      </View>
    </View>
  );
}

const heigtImage = (height / 2000) * 1000;
const widthImage = width - 40;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.34,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    marginTop: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  text: {
    fontSize: 20,
    color: "#000",
  },
  textWrap: {
    flex: 1,
  },
  imgWrap: {
    flex: 4,
  },
  img: {
    height: heigtImage,
    width: widthImage,
  },
  wrapdot : {
    position: "absolute",
    flexDirection:'row',
    alignSelf:'center',
    bottom: 5,
  },
  dotActive : {
    color: '#ffbe0b',
    margin:3,
  },
  dot: {
    color: '#fff', 
    margin : 3,
  } 
});
