import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Promo from "../../components/promo.js";
import Listlapangan from "../../components/listlapangan";
import Lapanganterbaik from "../../components/lapangterbaik"



const screenWidth = Math.round(Dimensions.get("window").width);

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/font/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/font/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
         <ImageBackground
            style={[styles.fixed, styles.containter]}
            source={require("../../assets/image/background.png")}
        />
      <ScrollView style={[styles.fixed, styles.scrollview]}>
        <View style={[styles.content]}>
        <View style={[styles.judul]}>
        <Image
            style={{
              width:180,
              height:15,
            }}
            source={require("../../assets/icons/header1.png")}
          />
        </View>
          <View style={[styles.promo]}>
          <Promo />
          </View>
          <View style={[styles.namapengguna]}>
          <View style={{ flexDirection: "row",marginHorizontal:20 }}>
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Image source={require("../../assets/image/profile.png")} />
            </View>
            <View style={{ flex: 1, marginLeft: 5 }}>
              <Text style={styles.texthi}>Hi,</Text>
              <Text style={styles.textnama}>Rangga Renaldi Yusuf</Text>
            </View>
          </View>
          </View>
          <View style={[styles.headerlapangan]}>
          <View style={{ flexDirection: "row",marginHorizontal:20 }}>
            <View style={{alignItems: "flex-end"}}>
              <Text style={{fontSize: 15, fontFamily: "Poppins-Bold" }}>Lapangan Futsal</Text>
            </View>
            <TouchableOpacity style={{marginHorizontal:110, backgroundColor: "#252579",borderRadius: 5,width:80,height:20,alignItems:'center',}}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontSize: 12,}}>Liat Semua</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={[styles.lapangan]}>
          <Listlapangan />
          </View>
          <View style={[styles.headerterbaik]}>
          <View style={{ flexDirection: "row",marginHorizontal:20 }}>
            <View style={{alignItems: "flex-end"}}>
              <Text style={{fontSize: 15, fontFamily: "Poppins-Bold" }}>Terbaik</Text>
            </View>
            <TouchableOpacity style={{marginHorizontal:175, backgroundColor: "#252579",borderRadius: 5,width:80,height:20,alignItems:'center'}}>
              <Text style={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontSize: 12,}}>Liat Semua</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={[styles.lapanganterbaik]}>
          <Lapanganterbaik/>
          </View>
          <View style={[styles.akhir]}></View>
        </View>
      </ScrollView>
    </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  akhir: {
    height:30
  },
  judul: {
    height:20,
  },
  promo: {
    height:150,
  },
  namapengguna: {
    width:screenWidth
  },
  texthi: {
    fontSize: 12,
    color: "#252579",
    fontFamily: "Poppins-Regular",
  },
  textnama: {
    fontSize: 15,
    color: "#252579",
    fontFamily: "Poppins-Bold",
    marginTop: -10,
  },
  headerlapangan: {
    width:screenWidth,
    marginVertical:15
  },
  headerterbaik: {
    width:screenWidth,
    marginVertical:15
  },
  lapangan:{
    height:230
  },
  lapanganterbaik: {
    height:130
  },  
  content: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 40
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  },
  scrollview: {
    backgroundColor: 'transparent'
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});
