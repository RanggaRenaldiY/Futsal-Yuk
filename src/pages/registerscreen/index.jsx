import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';


const RegisterScreen = ({type}) => {
    const [isSecured, setIsSecured] = useState(
		type === "password" ? false : true,
	);

    const toggleSecured = () => setIsSecured((_isSecure) => !_isSecure);

    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
    });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else

    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <ScrollView>
            <View style={styles.iconheader}>
            <Image style={styles.gbrheader} source={require('../../assets/icons/header.png')} />
            </View>
            
            <View style={styles.form}>
                <Text style={styles.textinput1}>Email</Text>  
                <TextInput style={styles.forminput1}/>
                <Text style={styles.textinput1} >Kata Sandi</Text>  
                <View style={styles.textpassword}>
                <TextInput style={styles.forminput2} secureTextEntry={isSecured} />
					<TouchableOpacity style={styles.iconButton} onPress={toggleSecured}>
						<AntDesign name="eyeo" size={24} color="#252579" />
					</TouchableOpacity>
                </View>
                <Text style={styles.textinput1} >Ulangi Kata Sandi</Text>  
                <View style={styles.textpassword}>
                <TextInput style={styles.forminput2} secureTextEntry={isSecured}/>
					<TouchableOpacity style={styles.iconButton} onPress={toggleSecured}>
						<AntDesign name="eyeo" size={24} color="#252579" />
					</TouchableOpacity>
                </View>    
               
            </View>
        
            <View style={styles.agreement}>
                <AntDesign name="checkcircle" size={18} color="#252579" />
                <Text style={{fontFamily:'Poppins-Regular', color:'#A0A0A0', marginLeft:10}}>saya setuju dengan <Text style={{fontWeight:'bold', color:'#626262', fontFamily:'Poppins-Bold',}}>Syarat</Text> dan <Text style={{fontWeight:'bold', color:'#626262',fontFamily:'Poppins-Bold',}}>Ketentuan</Text></Text>    
            </View>
            <View style={styles.button}>
            <View style={styles.masuk}><TouchableOpacity><Text style={styles.textmasuk}>BUAT AKUN</Text></TouchableOpacity></View>
            </View>
            </ScrollView>
            </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header: {
        flex:0.5
    },  
    iconheader: {
        flex:0.3,
        alignItems:'center',
        justifyContent:"flex-end"
    },
    iconButton: {
        flex:0.2,
    },
    form: {
        flex:1.4,
        padding:15,
    },
    textinput1: {
        fontFamily:'Poppins-Bold',
        fontSize:15,
        color:'#616161',
        marginTop:15,
    },
    forminput1: {
        height: 40,
        backgroundColor:'#EFEFEF',
        borderRadius:10,
        padding:10
    },
    forminput2: {
        flex:2,
        padding:10
      },
      textpassword: {
          flexDirection: 'row',
          // justifyContent:'space-betweens',
          alignItems:'center',
          height: 40,
          backgroundColor:'#EFEFEF',
          borderRadius:10,
      },
    agreement: {
        flex:0.1,
        flexDirection:'row',
        padding:15
    },
    button: {
        flex:0.8, 
        padding:20
    },
    masuk: {
        backgroundColor: "#252579",
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

    },
    textmasuk: {
        color:"#FFFFFF",
        fontFamily:'Poppins-Bold',
        fontSize:20,      
    }

})
