
import React, { useState } from 'react';

import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Foundation, SimpleLineIcons } from '@expo/vector-icons'; 
 import LottieView from 'lottie-react-native';

import { 
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic, 
    useFonts
  } from '@expo-google-fonts/rubik'

  import {AppLoading} from 'expo'

export default function Login({navigation}) {
  const [visible, setVisible] = useState(false);

    let [fonstLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_300Light
    })

    if(!fonstLoaded){
        return <AppLoading/>
    }
  return (
    <View style={{ alignItems: 'center', backgroundColor:'#F8FBFF', flex:1}}>
       
       

        <Image source={require('../imgs/fondologin.png')} style={{resizeMode:'cover', height:'55%', width:'100%', marginTop:-46}}  />
        <Image source={require('../imgs/logologin.png')} style={{resizeMode:'cover', height:200, width:200, position:'absolute', marginTop:65}}  />


        <Text style={{color:'#13497B', fontSize:35, marginTop:-50, fontFamily:'Rubik_500Medium'}} >Welcome</Text>
        <Text style={{color:'gray', fontSize:18, fontFamily:'Rubik_400Regular'}} >Login for enjoy findhome</Text>
    
    
<View style={{width:'90%',  height:50, marginTop:60}} >
<Text style={{color:'#13497B', fontSize:14, fontFamily:'Rubik_400Regular'}} >Email</Text>

<View style={{width:'100%', backgroundColor:'white', height:50, alignSelf:'center', marginTop:10, elevation:2, borderRadius:10, flexDirection:'row', alignItems:'center'}} >
    <TextInput style={{height:48, width:'80%', marginLeft:35}} autoCapitalize={false} keyboardType='email-address' />
<Foundation name="home" size={24} color="#60D9E1" />
</View>
</View>
<View style={{width:'90%',  height:50, marginTop:40}} >
<Text style={{color:'#13497B', fontSize:14, fontFamily:'Rubik_400Regular'}} >Password</Text>

<View style={{width:'100%', backgroundColor:'white', height:50, alignSelf:'center', marginTop:10, elevation:2, borderRadius:10, flexDirection:'row', alignItems:'center'}} >
    <TextInput style={{height:48, width:'80%', marginLeft:35, fontWeight:'bold'}} secureTextEntry={true}  />
    <SimpleLineIcons name="eye" size={24} color="gray" />
</View>
</View>

{/*  */}
        <TouchableOpacity onPress={()=>{
            
            setVisible(true)
            setTimeout(() => {
                navigation.navigate('NavAnima')
                setVisible(false)
                
            }, 5000);
            
            }} style={{height:60, width:'92%', backgroundColor:'#13497B', marginTop:50, borderRadius:12, alignContent:'center', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:15, color:'white',fontFamily:'Rubik_500Medium'}} >LOGIN</Text>
        </TouchableOpacity>

        <View style={{width:'92%',flexDirection:'row', marginTop:19, justifyContent:'space-between'}} >
            <TouchableOpacity>
                <Text style={{fontSize:13,fontFamily:'Rubik_300Light'}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:13, color:'#13497B',fontFamily:'Rubik_500Medium'}}>create new account</Text>
            </TouchableOpacity>
        </View>
        <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
      
      >
          <View style={{height:'100%', width:'100%', backgroundColor:'rgba(255,255,255,0.1)', alignContent:'center', alignItems:'center', justifyContent:'center'}} >
      
          <LottieView
                  source={require('../assets/homelottie.json')}

         style={{
           width: 200,
           height: 200,
           alignSelf:'center'
           
         }}
         autoPlay
         loop
       
       />
          </View>

      </Modal>
    
        
    </View>

  );
}