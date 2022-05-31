import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);


const listlapangan = ({ navigation })=> {
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
        <View style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang.png')} />
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Checkout')} style={styles.boxsewa}><Text style={styles.textsewa}>Sewa</Text></TouchableOpacity>
        <View style={styles.detaillapang}><Text style={styles.textnamalapang}>Dewa Futsal</Text></View>
        <View style={styles.detaillapang}><Text style={styles.texthargalapang}>Harga 85.000 - 100.000</Text></View>
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
        <View style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang1.png')} />
        </View>
        <TouchableOpacity style={styles.boxsewa}><Text style={styles.textsewa}>Sewa</Text></TouchableOpacity>
        <View style={styles.detaillapang}><Text style={styles.textnamalapang}>Dewa Futsal</Text></View>
        <View style={styles.detaillapang}><Text style={styles.texthargalapang}>Harga 85.000 - 100.000</Text></View>
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
        <View style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang2.png')} />
        </View>
        <TouchableOpacity style={styles.boxsewa}><Text style={styles.textsewa}>Sewa</Text></TouchableOpacity>
        <View style={styles.detaillapang}><Text style={styles.textnamalapang}>Dewa Futsal</Text></View>
        <View style={styles.detaillapang}><Text style={styles.texthargalapang}>Harga 85.000 - 100.000</Text></View>
      </View>
      <View style={styles.jeda}></View>
      <View style={styles.cardsewa}>
        <View style={styles.framesewa}>
        <Image style={styles.gambarsewa}source={require('../assets/image/lapang3.png')} />
        </View>
        <TouchableOpacity style={styles.boxsewa}><Text style={styles.textsewa}>Sewa</Text></TouchableOpacity>
        <View style={styles.detaillapang}><Text style={styles.textnamalapang}>Dewa Futsal</Text></View>
        <View style={styles.detaillapang}><Text style={styles.texthargalapang}>Harga 85.000 - 100.000</Text></View>
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
    width:'127%',
    borderTopRightRadius:25,
    borderTopLeftRadius:20,
  
  },
  boxsewa:{
    backgroundColor:"#BCBF18",
    flex:0.2,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    alignItems:'center',
    justifyContent:'center',
    width:139.5
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
