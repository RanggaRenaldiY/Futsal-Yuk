import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Login, Register, Option, Booking, Profile, Checkout } from "../pages";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const Tab = createBottomTabNavigator();



const MainApp = () => {
  let [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/font/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/font/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
  return (
    <NavigationContainer>
    <Tab.Navigator 
        initialRouteName="Booking"
        screenOptions={{
          tabBarActiveTintColor: '#252579',
          tabBarStyle :{
                position: 'absolute',
                bottom: 25,
                left: 20,
                right:20,
                elavation: 0,
                backgroundColor: '#ffffff',
                borderTopColor: '#ffffff',
                borderRadius: 15,
                height: 55,
              }
        }}
  >
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home', headerShown: false,
          tabBarIcon: ({focused }) => (
            <Image
            source={
              focused
                ? require('../assets/icons/HomeActive.png')
                : require('../assets/icons/Home.png')
            }/>
          ),
        }}
      />
      <Tab.Screen
       name="Booking"
        component={Booking}
        options={{
          tabBarLabel: 'Booking', headerShown: false, 
          tabBarIcon: ({focused }) => (
            <Image
            source={
              focused
                ? require('../assets/icons/BookingActive.png')
                : require('../assets/icons/Booking.png')
            }/>
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile', headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
            source={
              focused
                ? require('../assets/icons/ProfileActive.png')
                : require('../assets/icons/Profile.png')
            }/>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>

    
  )
}

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Option">
        <Stack.Screen name="Option" component={Option} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
};

export default MainApp;

const styles = StyleSheet.create({});