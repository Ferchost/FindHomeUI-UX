const NStack = createSharedElementStackNavigator();

function AnimNav({navigation}){
  return(
    <NStack.Navigator>
    <NStack.Screen name="Home" options={{headerShown:false}}  component={Home} />
    <NStack.Screen name="Details"  options={navigation =>({
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
          animation: 'fade',
           resize: 'clip',
          align: 'center-top'
        },
      ]

    }} component={Details} />
  </NStack.Navigator>
  )
}