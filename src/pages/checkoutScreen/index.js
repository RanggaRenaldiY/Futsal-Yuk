import { StyleSheet, Text, View } from "react-native";
import React from "react";

const checkout = () => {
  return (
    <View style={styles.container}>
      <Text>booking Screen</Text>
    </View>
  );
};

export default checkout;

const styles = StyleSheet.create({
    container :{ 
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:"center"
    }
});
