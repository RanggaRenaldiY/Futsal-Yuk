import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import Slider1 from "../assets/image/promo1.png";
import Slider2 from "../assets/image/promo2.png";

const screenWidth = Math.round(Dimensions.get("window").width);
const images = [Slider1, Slider2];

export default function App() {
  const [activePage, setActivePage] = useState(0);
  const autoPlayRef = useRef();
  const prevCountRef = useRef();

  prevCountRef.current = { activePage, setActivePage };

  const changePage = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    setActivePage(index);
  };

  function move(next) {
    if (autoPlayRef.current != null) {
      autoPlayRef.current.scrollTo({
        y: 0,
        x: screenWidth * next,
        animated: true,
      });
    }
  }

  useEffect(() => {
    setInterval(() => {
      const next =
        prevCountRef.current.activePage < images.length - 1
          ? prevCountRef.current.activePage + 1
          : 0;
      move(next);
    }, 10000);
  }, []);

  return (
    <View style={styles.bannerImage}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={autoPlayRef}
        onScroll={changePage}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={changePage}
      >
        {images.map((image) => (
          <Image key={image} source={image} style={styles.bannerImage} />
        ))}
      </ScrollView>
      <View style={styles.bannerPageContainer}>
        {images.map((image, i) => (
          <View
            key={image}
            style={[
              styles.bannerSliderIcon,
              { backgroundColor: i === activePage ? "#FFFFFF" : "#C5C4C4" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bannerImage: {
    width: screenWidth,
    height:'100%',
    alignItems: "center",
    resizeMode: "contain",
  },
  bannerPageContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  bannerSliderIcon: {
    width: 8,
    height: 8,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal:5
  },
});
