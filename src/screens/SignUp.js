import { View, Text, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import { Header, InputField, Button, Check, Camera } from "../components";
import { COLORS, FONTS, SAFEAREAVIEW, SIZES } from "../constants";
import { postData } from "../functions/backend/postData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../firebase/firebaseConfig';
import { setUser } from "../reducer/userSlice";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";

export default function SignUp() {
    const navigation = useNavigation();
    const [remember, setRemember] = useState(false);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading , setLoading] = useState(false)
     const dispatch = useDispatch()
    const handleSignUp = () => {
        
           setLoading(true)
          createUserWithEmailAndPassword(auth , email , password)
           .then((user)=>{
              const data = {fullName,
            phoneNumber,
            email,
            password,
            confirmPassword,
            remember,
            userId: user.user.uid
            
            }
               postData('users' ,data , ()=>{
                 dispatch(setUser(data))
                setLoading(false)

               } )
           })
            .catch((error)=>{
            setLoading(false)
           const errorCode = error.code;
             const errorMessage = error.message;
         console.log(error)
      switch (errorCode) {
        case 'auth/invalid-credential':
          alert('Adresse email ou mot de passe de passe  incorrecte.');
          break;
        case 'auth/user-disabled':
          alert('Votre compte a été désactivé.');
          break;
        case 'auth/user-not-found':
          alert('Utilisateur non trouvé.');
          break;
        case 'auth/missing-password':
          alert('Veillez insérer votre mot de passe.');
          break;
        case 'auth/network-request-failed':
          alert('Problème lié à l\'internet. Veuillez réessayer.');
          break;
        case 'auth/too-many-requests':
          alert('Trop de tentatives de connexion. Veuillez réessayer plus tard.');
          break;
           case 'auth/invalid-email':
          alert('Trop de tentatives de connexion. Veuillez réessayer plus tard.');
          break;
        default:
          alert(errorMessage); // Afficher le message d'erreur par défaut

          console.log(errorCode)
      }
      })

       

       
    };
    
    const handleSumit = ()=>{
         console.log({
            fullName,
            phoneNumber,
            email,
            password,
            confirmPassword,
            remember,
        });
        if (fullName!=='' && 
            phoneNumber!==''&&
            email!==''&&
            password!=='') {
            


            handleSignUp()
        }else{
            Alert.alert('Formulaire mal rempli' , ' Veillez vérifier les informations saisi')
        }
    }


    function renderContent() {
        return (
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: "center",
                    paddingHorizontal: 30,
                    paddingVertical: SIZES.paddingVertical,
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 99,
                        height: 99,
                        backgroundColor: COLORS.gray1,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 40,
                    }}
                >
                    <Camera />
                </TouchableOpacity>
                <InputField
                    placeholder="Nom complet"
                    value={fullName}
                    onChangeText={(text)=>{setFullName(text)}}
                    contaynerStyle={{ marginBottom: 13 }}
                />
                <InputField
                    placeholder="Numéro de téléphone"
                    value={phoneNumber}
                    onChangeText={(text)=>{setPhoneNumber(text)}}
                    contaynerStyle={{ marginBottom: 13 }}
                />
                <InputField
                    placeholder="Email"
                    value={email}
                    onChangeText={(text)=>{setEmail(text)}}
                    contaynerStyle={{ marginBottom: 13 }}
                />
                <InputField
                    placeholder="Mot de passe"
                    value={password}
                    onChangeText={(text)=>{setPassword(text)}}
                    secureTextEntry={true}
                    contaynerStyle={{ marginBottom: 13 }}
                />
                <InputField
                    placeholder="Confirmer mot de passe"
                    value={confirmPassword}
                    onChangeText={(text)=>{setConfirmPassword(text)}}
                    secureTextEntry={true}
                    contaynerStyle={{ marginBottom: 37 }}
                />
                <View
                    style={{
                        width: "100%",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            marginBottom: 18,
                            alignItems: "center",
                        }}
                        onPress={() => setRemember(!remember)}
                    >
                        <View
                            style={{
                                width: 16,
                                height: 16,
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: COLORS.green,
                                marginRight: 8,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {remember && <Check />}
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    ...FONTS.Roboto_400Regular,
                                    fontSize: 16,
                                    marginLeft: 3,
                                    color: COLORS.gray2,
                                    lineHeight: 16 * 1.3,
                                }}
                            >
                                J'accepte les conditions d'utilisation
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Button
                    title={loading ? <ActivityIndicator color="white" /> : "S'inscrire"}
                    containerStyle={{
                        backgroundColor: COLORS.green,
                        marginBottom: 28,
                    }}
                    onPress={handleSumit}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "flex-end",
                        flex: 1,
                        marginBottom: 34,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.Roboto_400Regular,
                            fontSize: 16,
                            color: COLORS.black,
                        }}
                    >
                        Vous avez déjà un compte ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_700Bold,
                                fontSize: 16,
                                color: COLORS.green,
                            }}
                        >
                            {" "}
                            Se connecter !
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="S'inscrire" onPress={() => navigation.goBack()} />
            {renderContent()}
        </SafeAreaView>
    );
}
