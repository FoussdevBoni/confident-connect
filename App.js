import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import AppNavigation from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./src/reducer/store";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { colors } from "./src/data/colors";

export default function App() {
    let [fontsLoaded] = useFonts({
        Roboto_400Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
        Roboto_500Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
        Roboto_700Bold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
              <NavigationContainer>
                <StatusBar barStyle={'light-content'} backgroundColor={colors.primary}/>
                <AppNavigation />
              </NavigationContainer>
            </Provider>
        );
    }
}
