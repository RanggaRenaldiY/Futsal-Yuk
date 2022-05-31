import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const loginscreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
    });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
            <Image style={styles.gbrheader} source={require('../../assets/icons/header.png')} />
            </View>
            <View style={styles.gambar}>
            <Image source={require('../../assets/icons/iconlogin.png')} />
            </View>
            <View style={styles.title}>
                <Text style={styles.texttitle}>Sewa lapangan jauh lebih mudah dengan aplikasi <Text style={{fontWeight:'bold'}}>Futsal Yuk</Text> praktis dan aman</Text>
            </View>
            <View style={styles.aksi}>
                
                <View style={styles.buatakun}><TouchableOpacity onPress={() => navigation.navigate('Register')} ><Text style={styles.textbuatakun}>BUAT AKUN</Text></TouchableOpacity></View>
               
                <View style={styles.masuk}><TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.textmasuk}>MASUK</Text></TouchableOpacity></View>
            </View>
        </View>
    )
      }
}

export default loginscreen

const styles = StyleSheet.create({
    container: {
        flex:1.2,
    },
    icon: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    gambar: {
        flex:3,
        alignItems:'center',
        justifyContent:'center'
        
    },
    title: {
        flex:0.5,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'center',
    },
    texttitle: {
        fontFamily:'Poppins-Regular',
        fontSize:15,
        textAlign:'center'
      
    },
    aksi: {
        flex:1.5,
        padding:20,
        justifyContent:"space-around"
    },
    buatakun: {
        backgroundColor:'#252579',
        flex:0.35,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'

    },
    textbuatakun: {
        color:"#FFFFFF",
        fontFamily:'Poppins-Bold',
        fontSize:20,
        
    },
    masuk: {
        borderColor: "#252579",
        borderWidth:2,
        flex:0.35,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    textmasuk: {
        color:"#252579",
        fontFamily:'Poppins-Bold',
        fontSize:20,      
    }
})
