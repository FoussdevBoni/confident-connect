import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const getGestureDirection = (route) => {
  if (route?.params?.previousRoute) {
    return 'horizontal';
  }
  return 'vertical';
};
 const Stack = createStackNavigator()
function Navigation() {
     
    const navigation = useNavigation()
    const user = useSelector((state) => state.user.userData);

    useEffect(()=>{
      if (user) {
        navigation.navigate('dashboard')
      } else{
          navigation.navigate('visitor')

      }
    } , [user])


    return (
         <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          gestureDirection: getGestureDirection(route, navigation),
          ...TransitionPresets.SlideFromRightIOS, 
        })} 
      >
        {/**Debut routes globales  */}
        <Stack.Screen name="splash" options={{ headerShown: false }}>
           {(props) => <SplashScreen {...props} user={user} />}
         </Stack.Screen>
      
         

      </Stack.Navigator>
    );
}

export default Navigation;