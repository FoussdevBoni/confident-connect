import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";

import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";
import { Header, InputField, Button } from "../components";

export default function ForgotPassword() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);

    function renderContent() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.gray2,
                        marginBottom: 25,
                        lineHeight: 16 * 1.5,
                    }}
                >Veuillez entrer votre adresse e-mail. Vous recevrez un lien vers
                    créez un nouveau mot de passe par e-mail
                </Text>
                <InputField
                    placeholder="Votre email"
                    contaynerStyle={{ marginBottom: 30 }}
                />
                <Button title="Envoyer" onPress={() => setShowModal(true)} />
            </KeyboardAwareScrollView>
        );
    }

    function EmailSentModal() {
        return (
            <Modal
                isVisible={showModal}
                onBackdropPress={setShowModal}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                style={{ margin: 0 }}
                animationIn="zoomIn"
                animationOut="zoomOut"
            >
                <View
                    style={{
                        width: SIZES.width - 60,
                        backgroundColor: COLORS.white,
                        marginHorizontal: 30,
                        borderRadius: 10,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: COLORS.green,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.Roboto_700Bold,
                                fontSize: 20,
                            }}
                        >
                           E-mail de réinitialisation du mot de passe envoyé
                        </Text>
                    </View>
                    <View
                        style={{ paddingVertical: 24, paddingHorizontal: 60 }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                marginBottom: 24,
                                color: COLORS.gray2,
                                ...FONTS.Roboto_400Regular,
                                fontSize: 14,
                            }}
                        >
                            Un email vous a été envoyé Suivez les instructions dans
                            l'e-mail pour réinitialiser le mot de passe
                        </Text>
                        <TouchableOpacity
                            style={{
                                width: 190,
                                height: 41,
                                backgroundColor: COLORS.green,
                                borderRadius: 25,
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                            }}
                            onPress={() => {
                                setShowModal(false);
                                navigation.navigate("NewPassword");
                            }}
                        >
                            <Text
                                style={{
                                    ...FONTS.Roboto_700Bold,
                                    fontSize: 16,
                                    color: COLORS.white,
                                    textTransform: "uppercase",
                                }}
                            >
                                ok
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header
                title="Mot de passe oublié"
                onPress={() => navigation.goBack()}
            />
            {renderContent()}
            <EmailSentModal />
        </SafeAreaView>
    );
}
