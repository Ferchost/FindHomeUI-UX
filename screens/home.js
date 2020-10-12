import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Foundation, SimpleLineIcons, MaterialIcons, AntDesign, Octicons, FontAwesome5, Ionicons } from '@expo/vector-icons'; 
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
export default function Home({navigation}) {
    let [fonstLoaded] = useFonts({
        Rubik_300Light,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_300Light
    })

    if(!fonstLoaded){
        return <AppLoading/>
    }
    const data = [
        {
            
            id:1,
            username:'Frank Smith',
            title:'Special House mix',
            bed:2,
            bath:1,
            asist:1,
            price:1200,
            cite:'Los angeles, CA',
            imageProf:'https://images.pexels.com/photos/5255331/pexels-photo-5255331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            imageHouse:'https://www.agloma.es/wp-content/uploads/2019/09/cocina-modular-1080x675.jpg',
            opinions:20
        },
        {
            id:2,
            username:'Anne Perez',
            title:'Special Residential ',

            bed:4,
            bath:3,
            asist:0,
            price:4000,
            cite:'Los angeles, CA',
            imageProf:'https://images.pexels.com/photos/4196157/pexels-photo-4196157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            imageHouse:'https://excavacionesgrasa.com/wp-content/uploads/2020/03/photo-1580587771525-78b9dba3b914-1080x675.jpeg',

            opinions:20

        },
        {
            id:3,
            username:'Jade Blang',
            title:'Studio Lux',

            bed:2,
            bath:1,
            asist:1,
            price:2800,
            cite:'Los angeles, CA',
            imageProf:'https://images.pexels.com/photos/5255331/pexels-photo-5255331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            imageHouse:'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            opinions:20

        },
        {
            id:4,
            username:'Jade Blang',
            title:'Studio Lux',

            bed:2,
            bath:1,
            asist:1,
            price:2800,
            cite:'Los angeles, CA',
            imageProf:'https://images.pexels.com/photos/5255331/pexels-photo-5255331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            imageHouse:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            opinions:20

        },
        {
            id:5,
            username:'Anne Perez',
            title:'Special Residential ',

            bed:4,
            bath:3,
            asist:0,
            price:4000,
            cite:'Los angeles, CA',
            imageProf:'https://images.pexels.com/photos/4196157/pexels-photo-4196157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            imageHouse:'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            opinions:20

        },
    ]
  return (
    <View style={{flex:1}}>
    <ScrollView style={{backgroundColor:'#F8FBFF'}} showsVerticalScrollIndicator={false} >
    <View style={{height:65, width:'100%', marginTop:38, flexDirection:'row', justifyContent:'space-around', alignContent:'center', alignItems:'center'}} >

<Image style={{height:50, width:50, borderRadius:35, alignContent:'center'}} source={{uri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}}   />
<View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}} >
<MaterialCommunityIcons name="map-marker-outline" size={24} color="#13497B" />
<Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:14}} >Los angeles, CA</Text>
<MaterialIcons name="keyboard-arrow-down" size={30} color="#13497B" />
</View>
<View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}} >
    <TouchableOpacity style={{marginRight:15}}>
    <SimpleLineIcons name="bell" size={24} color="#143656"  />
    <View style={{height:10, width:10, backgroundColor:'red', borderRadius:12, position:'absolute', alignSelf:'flex-end'}} >

    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <AntDesign name="setting" size={24} color="#143656" />
        </TouchableOpacity>
</View>




</View>
<Text style={{fontFamily:'Rubik_300Light', color:'gray', fontSize:20, paddingLeft:23, marginTop:40}} >Hello Mark!</Text>
<Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:20,paddingLeft:23}} >Start looking for your house</Text>

<View style={{width:'90%', height:60, backgroundColor:'white', alignSelf:'center', borderRadius:12, elevation:2, marginTop:26, alignContent:'center',flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} >
<AntDesign name="search1" size={27} color="#7192B0" style={{alignContent:'center', alignItems:'center', justifyContent:'center', paddingLeft:15}}/>

<Text style={{fontFamily:'Rubik_300Light', color:'#13497B', fontSize:20,paddingLeft:23}} >What are you looking for?</Text>
<Octicons name="settings" size={24} color="#143656" style={{paddingRight:15}} />

</View>
<View style={{width:'90%', alignSelf:'center', marginTop:25, flexDirection:'row', justifyContent:'space-between'}}  >
<TouchableOpacity style={{height:95, width:'19%', backgroundColor:'#46D0D9', borderRadius:12, justifyContent:'center'}} >
<SimpleLineIcons name="home" size={35} color="white" style={{alignSelf:'center', alignItems:'center', justifyContent:'center', alignContent:'center'}} />
<Text style={{fontFamily:'Rubik_400Regular', color:'#FFF', fontSize:14,alignSelf:'center', marginTop:5}} >Home</Text>

</TouchableOpacity>
<TouchableOpacity style={{height:80, width:'19%', backgroundColor:'#fff', borderRadius:12, justifyContent:'center', elevation:2}} >
<FontAwesome5 name="hotel" size={24} color="#D3DBE2" style={{alignSelf:'center', alignItems:'center', justifyContent:'center', alignContent:'center'}}  />
</TouchableOpacity>
<TouchableOpacity style={{height:80, width:'19%', backgroundColor:'#fff', borderRadius:12, justifyContent:'center', elevation:2}} >
<FontAwesome5 name="key" size={24} color="#D3DBE2" style={{alignSelf:'center', alignItems:'center', justifyContent:'center', alignContent:'center'}}  />
</TouchableOpacity>
<TouchableOpacity style={{height:80, width:'19%', backgroundColor:'#fff', borderRadius:12, justifyContent:'center', elevation:2}} >

<MaterialCommunityIcons name="brightness-percent" size={24} color="#D3DBE2" style={{alignSelf:'center', alignItems:'center', justifyContent:'center', alignContent:'center'}} />
</TouchableOpacity>


</View>

{
    data.map(function(x){
        return(
            <TouchableOpacity
            
            onPress={()=> navigation.navigate('Details',{data:x})} >   
            <View style={{height:400, width:'90%', backgroundColor:'white', alignSelf:'center', marginTop:30, elevation:4, borderRadius:22,marginBottom:20}} >
           

                     <SharedElement id={`item.${x.id}.photo`} style={{ height:'70%'}}  >
            <Image source={{uri:x.imageHouse}} style={{width:'100%', height:'100%', borderTopRightRadius:22, borderTopLeftRadius:22, resizeMode:'cover'}}   />
            </SharedElement>


            <View style={{backgroundColor:'rgba(255,255,255,0.6)', height:30, width:'35%', position:'absolute', marginTop:23, marginLeft:23, borderRadius:12, flexDirection:'row', alignItems:'center', justifyContent:'center'}}  >
            <MaterialCommunityIcons name="map-marker-outline" size={16} color="#13497B" />
        <Text style={{fontFamily:'Rubik_300Light', color:'#143656', fontSize:13}} >{x.cite}</Text>
            </View>
            <View style={{height:'40%', width:'100%', backgroundColor:'#FFF', borderRadius:22, marginTop:-39}} >
     <SharedElement id={`item.${x.id}.heart`}   >

            <TouchableOpacity style={{height:40, width:40, backgroundColor:'white', borderRadius:40, justifyContent:'center', alignItems:'center', alignSelf:'flex-end', marginRight:25,elevation:5, marginTop:-15}}  >
            <FontAwesome5 name="heart" size={24} color="red" />
            </TouchableOpacity>
    </SharedElement>


            <Text style={{fontFamily:'Rubik_400Regular', color:'#143656', fontSize:20, paddingLeft:23}} >{x.title}</Text>

            <View style={{flexDirection:'row', justifyContent:'space-between'}} >
    
                <View>
    
                    <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', paddingLeft:23, marginTop:10, }} >
                    <SharedElement id={`item.${x.id}.imaProf`}   >

                        <Image style={{height:25, width:25, borderRadius:35, alignContent:'center', marginRight:5}} source={{uri:x.imageProf}}   />
                        </SharedElement>
        <Text style={{fontFamily:'Rubik_300Light', color:'#13497B', fontSize:14}} >{x.username}</Text>
                    </View>
                <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', paddingLeft:23, marginTop:10}} >
                        <AntDesign name="star" size={15} color="#46D0D9" />
                        <AntDesign name="star" size={15} color="#46D0D9" />
    
                        <AntDesign name="star" size={15} color="#46D0D9" />
                        <AntDesign name="star" size={15} color='rgba(0,0,0,0.2)' />
                        <AntDesign name="star" size={15} color='rgba(0,0,0,0.2)' />
    
                    
                        <Text style={{fontFamily:'Rubik_300Light', color:'rgba(0,0,0,0.2)', fontSize:12, marginLeft:5}} >{x.opinions} opinions</Text>
                </View>
    
            
            </View>
            
    
            <View>
    
            <View style={{flexDirection:'row', alignContent:'center', alignItems:'center',  marginTop:10, paddingRight:23}} >
            <Text style={{fontFamily:'Rubik_500Medium', color:'#143656', fontSize:22,marginTop:-10}} >${x.price} usd</Text>
            </View>
            <SharedElement id={`item.${x.id}.extras`}   >

            <View style={{flexDirection:'row', alignContent:'center', alignItems:'center', marginTop:10, justifyContent:'space-between',paddingRight:23}} >
            
                <View style={{flexDirection:'row', marginRight:4}} >
                <Ionicons name="ios-bed" size={15} color='#8A9BAB' />
        <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:14}} > {x.bed}</Text>
    
                </View>
                <View style={{flexDirection:'row', marginRight:4}} >
                <FontAwesome5 name="bath" size={15} color='#8A9BAB' />
        <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:14}} > {x.bath}</Text>
                </View>
                <View style={{flexDirection:'row', marginRight:4}} >
                <FontAwesome5 name="concierge-bell"  size={15} color='#8A9BAB' />
        <Text style={{fontFamily:'Rubik_400Regular', color:'#8A9BAB', fontSize:14}} > {x.asist}</Text>
                </View>
    
    
            
            </View>
            </SharedElement>
    
    
            </View>
    
            </View>
    
            </View>

    </View>
    </TouchableOpacity>

        )

    })
}





    </ScrollView>
    <View style={{width:'100%', height:65, backgroundColor:'white', borderTopLeftRadius:22, borderTopRightRadius:22, flexDirection:'row', elevation:5, alignContent:'center', alignItems:'center', justifyContent:'space-between'}}>
    <SimpleLineIcons name="home" size={24} color="#46D0D9" style={{marginLeft:40}}/>
    <MaterialCommunityIcons name="heart-outline" size={27} color="gray"/>
    <MaterialCommunityIcons name="map-marker-outline" size={30} color="gray"/>
    <FontAwesome5 name="comment-dots" size={27}  color="gray" style={{marginRight:40}}/>


</View>
 
    </View>

  );
}