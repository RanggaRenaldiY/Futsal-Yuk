import { StyleSheet, Text, View } from "react-native";
import React from "react";

const booking = () => {
  return (
    <View style={styles.container}>
      <Text>booking Screen</Text>
    </View>
  );
};

export default booking;

const styles = StyleSheet.create({
    container :{ 
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:"center"
    }
});
