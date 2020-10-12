import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import Login from './screens/login'
import Home from './screens/home'
import Details from './screens/details'

//import {createSharedElementStackNavigator}from 'react-native-shared-element'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();
 function BottomNavi() {
  return (
    
      <Tab.Navigator   
        activeColor="#46D0D9"
  inactiveColor="gray"
  barStyle={{ backgroundColor: 'white',

  paddingLeft: 20,
  paddingTop: 10,
  paddingRight: 20,
  borderTopEndRadius: 20,
  borderTopStartRadius: 20,
  overflow: 'hidden' }}

        
        
      
      >
        <Tab.Screen name=" "    options={{
        
          
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" size={24} color={color} />
          ),
        }}  component={AnimNav} />

      <Tab.Screen name="  "    options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" size={27} color={color} style={{width:'120%'}}/>
          ),
        }}  component={HomeScreen} />

      <Tab.Screen name="   "    options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-outline" size={30} color={color} style={{width:'120%'}}/>
          ),
        }}  component={HomeScreen} />

    <Tab.Screen name="    "    options={{
          
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="comment-dots" size={27}  color={color} style={{width:'120%'}}/>
          ),
        }}  component={HomeScreen} />
      
      </Tab.Navigator>
   
  );
}

const Stack = createStackNavigator();
const NStack = createSharedElementStackNavigator();

function AnimNav({navigation}){
  return(
    <NStack.Navigator>
    <NStack.Screen name="Home" options={{headerShown:false}}  component={Home} />
    
    <NStack.Screen name="Details"   options={navigation =>({
      headerShown:false,
      headerBackTitleVisible:false,
      cardStyleInterpolator:({current: {progress}}) =>{
        return{
          cardStyle:{
            opacity: progress
          }
        }
      }
    })} 
    
    sharedElementsConfig={( route) =>{
      const {data} = route.params
      return[
        {
          id: `item.${data.id}.photo`,
          animation: 'move',
           resize: 'clip',
          align: 'center-top'
        },
        {
          id: `item.${data.id}.title`,
          animation: 'fade',
           resize: 'clip',
          align: 'center-top'
        },
        {
          id: `item.${data.id}.heart`,
          animation: 'fade',
           resize: 'clip',
          align: 'center-top'
        },
     
        {
          id: `item.${data.id}.extras`,
          animation: 'fade',
           resize: 'clip',
          align: 'center-top'
        },
        {
          id: `item.${data.id}.imaProf`,
          animation: 'fade',
           resize: 'clip',
          align: 'left-right'
        },
        
        
        
        
      ]

    }} component={Details} />
  </NStack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" options={{headerShown:false}} component={Login} />

        <Stack.Screen name="NavAnima" options={{headerShown:false}} component={AnimNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;