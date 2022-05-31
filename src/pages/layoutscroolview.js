import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Promo from "../../components/promo.js";
import Listlapangan from "../../components/listlapangan";

const HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/font/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/font/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
      <View style={[styles.header]}>
      <Image
            style={{
              resizeMode: "center",
              width: "50%",
              height: "50%",
            }}
            source={require("../../assets/icons/header1.png")}
          />
      </View>
      <ScrollView>
        <View style={[styles.content]}>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
          <View style={[styles.box]}></View>
        </View>
      </ScrollView>
      <View style={[styles.footer]}></View>
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
  header: {
    height: 60,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 10,
    alignItems:'center',
    justifyContent:'flex-end'
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8BC34A'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10
  }
});
