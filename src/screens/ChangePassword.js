import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Header, InputField, Button } from "../components";
import { SAFEAREAVIEW, SIZES } from "../constants";

export default function ChangePassword() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: SIZES.paddingVertical,
                    paddingHorizontal: 30,
                }}
            >
                <InputField
                    placeholder="Ancien mot de passe"
                    contaynerStyle={{ marginBottom: 15 }}
                />
                <InputField
                    placeholder="Nouveau mot de passe"
                    contaynerStyle={{ marginBottom: 15 }}
                />
                <InputField
                    placeholder="Confirmer mot de passe"
                    contaynerStyle={{ marginBottom: 25 }}
                />
                <Button
                    title="Enrégistrer!"
                    onPress={() => navigation.navigate("MainLayout")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Changer mot de passe"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
        </SafeAreaView>
    );
}
