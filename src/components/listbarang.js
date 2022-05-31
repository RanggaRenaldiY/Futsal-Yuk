import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

export default class HomeActivity extends Component {
  render() {
    let dimensions = Dimensions.get("window");
    let imageHeight = Math.round((dimensions.width * 6) / 16);
    let imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            style={{ height: imageHeight, width: imageWidth }}
            source={require("../assets/image/promo1.png")}
          />

          <Image
            style={{ height: imageHeight, width: imageWidth }}
            source={require("../assets/image/promo2.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
