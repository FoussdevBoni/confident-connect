import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import { SuccessTwo, Button } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function AvatarCreationSuccessful() {
    const navigation = useNavigation()
    const route = useRoute()
    const {avatar } = route.params
    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    flexGrow: 1,
                    justifyContent: "center",
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignSelf: "center", marginBottom: 36 }}>
                    <SuccessTwo />
                </View>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_700Bold,
                        fontSize: 22,
                        textTransform: "capitalize",
                        color: COLORS.green,
                        marginBottom: 10,
                    }}
                >
                    Avatar créé avec succès
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 21,
                    }}
                >
                   Votre avatar a été créé et personnalisé comme vous le souhaitez
                </Text>
                <Button
                    onPress={()=>{navigation.navigate('simulation' , {avatar})}}
                    title="Continuer"
                    containerStyle={{ marginBottom: 15 }}
                />
                <Button
                onPress={()=>{navigation.goBack}}
                    title="Modifier l'avatar"
                    containerStyle={{ backgroundColor: COLORS.lightGreen }}
                    textStyle={{ color: COLORS.green }}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
