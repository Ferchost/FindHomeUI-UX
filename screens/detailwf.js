import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Foundation, SimpleLineIcons, MaterialIcons, AntDesign, Octicons, FontAwesome5, Ionicons,Feather  } from '@expo/vector-icons'; 
import{SharedElement} from 'react-navigation-shared-element'
import TouchableScale from 'react-native-touchable-scale';

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
  import { MaterialCommunityIcons } from '@expo/vector-icons'; 
  import {AppLoading} from 'expo'
export default function Details({navigation, route, props}) {
    let [fonstLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_300Light
    })

    if(!fonstLoaded){
        return <AppLoading/>
    }
    const {data} = route.params
  return (
    <View style={{flex:1}}>
    <ScrollView style={{backgroundColor:'#F8FBFF', height:'100%'}} showsVerticalScrollIndicator={false} >
    <SharedElement id={`item.${data.id}.photo`}   >
            <Image source={{uri:data.imageHouse}} style={{width:'100%', height:450, borderTopRightRadius:22, borderTopLeftRadius:22, resizeMode:'cover'}}   />
         </SharedElement>
         <View style={{flexDirection:'row',width:'100%', height:60, marginTop:'10%', position:'absolute', alignItems:'center', alignContent:'center', justifyContent:'space-between'}} >
         <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:40, width:40, backgroundColor:'white', borderRadius:40, justifyContent:'center', alignItems:'center',  elevation:5,marginLeft:22}}  >
         <MaterialIcons name="keyboard-arrow-left" size={35} color="black" />
                              </TouchableOpacity>
            <View style={{height:30, width:'26%', backgroundColor:'#6CC775',borderRadius:20, alignContent:'center', alignItems:'center', justifyContent:'center'}} >
            <Text style={{fontFamily:'Rubik_400Regular', color:'#ffffff', fontSize:14, textAlign:'center'}} >Available</Text>


            </View>
            <SharedElement id={`item.${data.id}.heart`}   >

            <TouchableOpacity style={{height:40, width:40, backgroundColor:'white', borderRadius:40, justifyContent:'center', alignItems:'center',  elevation:5, marginRight:22}}  >
            <FontAwesome5 name="heart" size={20} color="red" />
            </TouchableOpacity>
            </SharedElement>

</View>

<View style={{width:'100%', backgroundColor:'#F8FBFF', borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:-45}} >

  <SharedElement id={`item.${data.id}.cite`}   >

      <View style={{ height:30, width:'35%', marginTop:23, marginLeft:15, borderRadius:12, flexDirection:'row', alignItems:'center', justifyContent:'center'}}  >

            <MaterialCommunityIcons name="map-marker-outline" size={18} color="#13497B" />
        <Text style={{fontFamily:'Rubik_300Light', color:'#143656', fontSize:16}} >{data.cite}</Text>

            </View>
  </SharedElement>

<View style={{flexDirection:'row', marginLeft:26, justifyContent:'space-between'}}>

            <SharedElement id={`item.${data.id}.title`}   >

            <Text style={{fontFamily:'Rubik_500Medium', color:'#143656', fontSize:24,marginTop:1}} >{data.title}</Text>
            </SharedElement>
         <SharedElement id={`item.${data.id}.imaProf`}   >

            <Image style={{height:44, width:44, borderRadius:35, alignContent:'center',marginRight:25, marginTop:-20 }} source={{uri:data.imageProf}}   />
        </SharedElement>


            </View>

            <View style={{marginLeft:26,  flexDirection:'row', marginTop:10}} >
            <Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:14, textAlign:'center'}} >High- speed wifi</Text>
            <View style={{height:7, width:7, backgroundColor:'#46D0D9', borderRadius:22, alignSelf:'center', marginLeft:5, marginRight:5}} />

            <Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:14, textAlign:'center'}} >Deskspace</Text>
            <View style={{height:7, width:7, backgroundColor:'#46D0D9', borderRadius:22, alignSelf:'center', marginLeft:5, marginRight:5}} />

            <Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:14, textAlign:'center'}} >Safe location</Text>

            </View>
            <SharedElement id={`item.${data.id}.extras`}   >

            <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginTop:13, justifyContent:'space-between',paddingLeft:26, width:'53%'}} >
            
            <View style={{flexDirection:'row'}} >
            <Ionicons name="ios-bed" size={21} color='#46D0D9' />
    <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:20}} > {data.bed}</Text>

            </View>
            <View style={{flexDirection:'row'}} >
            <FontAwesome5 name="bath" size={21} color='#46D0D9' />
    <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:20}} > {data.bath}</Text>
            </View>
            <View style={{flexDirection:'row'}} >
            <FontAwesome5 name="concierge-bell"  size={21} color='#46D0D9' />
    <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:20}} > {data.asist}</Text>
            </View>


        
        </View>
        </SharedElement>

<View style={{width:'100%',  height:60, borderColor:'rgba(	20, 54, 86,0.5)', borderTopWidth:0.5, borderBottomWidth:0.5, marginTop:30, flexDirection:'row', justifyContent:'space-between'}} >
  <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', marginLeft:25}}>
  <Feather name="info" size={33} color="#46D0D9" />
  <Text style={{fontFamily:'Rubik_400Regular', color:'#46D0D9', fontSize:12}} >Information</Text>
  </View>

  <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
  <MaterialCommunityIcons name="comment-processing-outline" size={33} color="#D3DBE2" />
  <Text style={{fontFamily:'Rubik_400Regular', color:'#D3DBE2', fontSize:12}} >Comments</Text>
  </View>

  <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
  <MaterialCommunityIcons name="brightness-percent" size={33}  color="#D3DBE2" />
    <Text style={{fontFamily:'Rubik_400Regular', color:'#D3DBE2', fontSize:12}} >Offers</Text>
  </View>

  <View style={{justifyContent:'center', alignContent:'center', alignItems:'center', marginRight:35}}>
  <AntDesign name="sharealt" size={33} color="#D3DBE2" />
    <Text style={{fontFamily:'Rubik_400Regular', color:'#D3DBE2', fontSize:12}} >Shared</Text>
  </View>
</View>
<Text style={{fontFamily:'Rubik_500Medium', color:'#143656', fontSize:20,marginTop:25, marginLeft:26}} >Description</Text>
<Text style={{fontFamily:'Rubik_300Light', color:'#143656', fontSize:14,marginLeft:26, marginRight:20, marginTop:15, marginBottom:60}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus condimentum nulla diam proin quis commodo malesuada. Dolor morbi egestas consectetur egestas aliquam tellus. Accumsan tristique consequat nec cras commodo et orci ipsum, convallis. Lectus nibh ut eget quis quis praesent pellentesque. Molestie a id potenti vivamus blandit aliquet iaculis sed. Amet ut rutrum mauris gravida pellentesque eget in in potenti.</Text>



</View>



    </ScrollView>
    <View style={{width:'100%', height:65, backgroundColor:'white', borderTopLeftRadius:12, borderTopRightRadius:12, flexDirection:'row', elevation:5, alignContent:'center', alignItems:'center', justifyContent:'space-between'}}>
  <Text style={{fontFamily:'Rubik_500Medium', color:'#143656', fontSize:20,marginLeft:26 }} >${data.price} usd</Text>
  <TouchableOpacity style={{height:'60%', backgroundColor:'#46D0D9', width:'40%', borderRadius:12, justifyContent:'center', alignContent:'center', alignItems:'center', marginRight:26}} >
  <Text style={{fontFamily:'Rubik_400Regular', color:'#fff', fontSize:16}} >Reserved now!</Text>

  </TouchableOpacity>


</View>
    </View>

  );
}