import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";

import {
    OnBoarding,
    SignIn,
    SignUp,
    LogIn,
    MainLayout,
    ForgotPassword,
    OtpCode,
    AccountCreated,
    Selectlocation,
    SignUpWith,
    Home,
    Profile,
    MyList,
    Order,
    RestaurantMenu,
    FoodDetails,
    Notifications,
    OrderHistory,
    AddPaymentMethod,
    EditProfile,
    FavoriteList,
    FAQ,
    MyPromocodes,
    Category,
    CartIsEmpty,
    OrderSuccessful,
    Filter,
    BestMeal,
    PaymentMethodOne,
    PaymentMethodTwo,
    PasswordHasBeenReset,
    NewPassword,
    VerifyYourPhoneNumber,
    ConfirmationCode,
    AddNewCard,
    ChangePassword,
} from "../screens";
import ChatScreen from "../screens/Quiz";
import AvatarSelectionScreen from "../screens/CreateAvatar";
import { useSelector } from "react-redux";
import User from "./User/User";

const Stack = createStackNavigator();
const getGestureDirection = (route) => {
  if (route?.params?.previousRoute) {
    return 'horizontal';
  }
  return 'vertical';
};

export default function Navigation() {
     const navigation = useNavigation()
    const user = useSelector((state) => state.user.userData);

    useEffect(()=>{
      if (user) {
        navigation.navigate('Home')
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
                 <Stack.Screen name="OnBoarding" options={{ headerShown: false }}>
                 {(props) => <OnBoarding {...props} user={user} />}
                 </Stack.Screen>
                

                <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUpWith" component={SignUpWith} />

                <Stack.Screen name="Profile" options={{ headerShown: false }}>
                 {(props) => <Profile {...props} user={user} />}
                 </Stack.Screen>

                <Stack.Screen name="Home" options={{ headerShown: false }}>
                 {(props) => <User {...props} user={user} />}
                 </Stack.Screen>

            
                <Stack.Screen name="EditProfile" options={{ headerShown: false }}>
                 {(props) => <EditProfile {...props} user={user} />}
                 </Stack.Screen>
                <Stack.Screen name="FAQ" component={FAQ} />
                <Stack.Screen name="MyPromocodes" component={MyPromocodes} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="CartIsEmpty" component={CartIsEmpty} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="BestMeal" component={BestMeal} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="AddNewCard" component={AddNewCard} />
                <Stack.Screen
                    name="ChangePassword"
                    component={ChangePassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ConfirmationCode"
                    component={ConfirmationCode}
                />
                <Stack.Screen
                    name="VerifyYourPhoneNumber"
                    component={VerifyYourPhoneNumber}
                />
                <Stack.Screen
                    name="PasswordHasBeenReset"
                    component={PasswordHasBeenReset}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PaymentMethodTwo"
                    component={PaymentMethodTwo}
                />
                <Stack.Screen
                    name="PaymentMethodOne"
                    component={PaymentMethodOne}
                />
                <Stack.Screen
                    name="OrderSuccessful"
                    component={OrderSuccessful}
                />
                <Stack.Screen
                    name="AddPaymentMethod"
                    component={AddPaymentMethod}
                />
                <Stack.Screen
                    name="RestaurantMenu"
                    component={RestaurantMenu}
                />
                <Stack.Screen
                    name="Selectlocation"
                    component={Selectlocation}
                />
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen
                    name="AccountCreated"
                    component={AccountCreated}
                />
                <Stack.Screen name="MainLayout" component={MainLayout} />
                <Stack.Screen name="OtpCode" component={OtpCode} />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                   options={{ headerShown: false }}

                />

                  <Stack.Screen
                    name="chat-quiz"
                    component={ChatScreen}
                   options={{ headerShown: false }}

                />

                 <Stack.Screen
                    name="create-avatar"
                    component={AvatarSelectionScreen}
                options={{ headerShown: false }}

                />
            </Stack.Navigator>
    );
}
