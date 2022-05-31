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
        <View style={styles.headericon}>
          <Image
            style={{
              resizeMode: "center",
              width: "50%",
              height: "50%",
            }}
            source={require("../../assets/icons/header1.png")}
          />
        </View>
        <View style={styles.promobox}>
          <Promo />
        </View>
        <View style={styles.namapengguna}>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                flex: 0.2,
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
        <View style={styles.headerpilih}>
          <View style={styles.boxtextlapang}>
            <View style={styles.textlapang}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Poppins-Bold",
                  paddingLeft: 20,
                  paddingTop: 5,
                }}
              >
                Lapangan Futsal
              </Text>
            </View>
            <View style={styles.boxtextliatsemua}>
              <View
                style={{
                  flex: 0.5,
                  width: "120%",
                  backgroundColor: "#252579",
                  borderRadius: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                  }}
                >
                  Liat Semua
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.boxlapang}>
            <Listlapangan />
          </View>
        </View>
        <View style={styles.pilihfutsal}>
          <Text>Pilih Futsal</Text>
        </View>
        <View style={styles.topfutsal}>
          <Text>Top Futsal</Text>
        </View>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headericon: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  promobox: {
    flex: 1.2,
    alignItems: "center",
    backgroundColor:"yellow"
  },
  namapengguna: {
    flex: 0.5,
  },
  headerpilih: {
    flex: 2,
  },
  pilihfutsal: {
    flex: 0.3,
    backgroundColor: "orange",
  },
  topfutsal: {
    flex: 1,
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
  boxlapang: {
    flex: 3,
  },
  boxtextlapang: {
    flexDirection: "row",
    flex: 0.6,
    justifyContent: "space-between",
  },
  textlapang: {
    flex: 0.8,
  },
  boxtextliatsemua: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
});
