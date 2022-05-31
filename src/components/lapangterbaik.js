import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);


const listlapangan = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/font/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/font/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
        <TouchableOpacity style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang.png')} />
        </TouchableOpacity>
    
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
      <TouchableOpacity style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang1.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
      <TouchableOpacity style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang2.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
      <TouchableOpacity style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang3.png')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default listlapangan;

const styles = StyleSheet.create({
  cardsewa: {
    flex:1,
    width:140,
    
  },
  framesewa:{
    flex:0.8,
    width:110,
    
  },
  jeda :{
    width:10,
  },
  gambarsewa :{
    height: '100%',
    width:'125%',
    borderRadius:20
  },
  boxsewa:{
    backgroundColor:"#BCBF18",
    flex:0.2,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  textsewa: {
    fontFamily:"Poppins-SemiBold"
  },
  detaillapang: {
    alignItems:'center'
  },
  textnamalapang: {
    fontFamily:"Poppins-SemiBold",
    fontSize:15
  },
  texthargalapang :{
     fontFamily:"Poppins-Regular",
     fontSize:10
  }
});
