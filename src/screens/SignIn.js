import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header, InputField, Button, Mail, Lock, Check } from "../components";
import { SAFEAREAVIEW, FONTS, COLORS, SIZES } from "../constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDataByProperty } from "../functions/backend/getData";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { setUser } from "../reducer/userSlice";

export default function SignIn() {
      const navigation = useNavigation();
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading] = useState(false)
     const dispatch = useDispatch()
    const handleSignIn = () => {
        
           setLoading(true)
          signInWithEmailAndPassword(auth , email , password)
           .then((user)=>{
               const userId= user.user.uid

               getDataByProperty('users' , 'userId' , userId , (data)=>{
                 if (data?.length>0) {
                    dispatch(setUser(data[0]))
                    setLoading(false)  
                 }else{
                    Alert.alert('Utilisateur introuvable' , 'Veillez saisir des informations valides de votre compte')
                    setLoading(false)  

                 }

               },
               (error)=>{
                 Alert.alert('Une erreur s\'est produite' , 'Veillez saisir des informations valides de votre compte')
                 setLoading(false)  
               } 
               
               
               )
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
        
            email,
            password,
          
        });
        if (
            email!==''&&
            password!=='') {
            


            handleSignIn()
        }else{
            Alert.alert('Formulaire mal rempli' , ' Veillez vérifier les informations saisi')
        }
    }

    return (
        <SafeAreaView style={{ ...SAFEAREAVIEW.AndroidSafeArea }}>
            <Header title="Se connecter" onPress={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 30,
                    alignItems: "center",
                    paddingTop: SIZES.paddingTop_02,
                }}
            >
                <Text
                    style={{
                        fontSize: 22,
                        marginBottom: 5,
                        ...FONTS.Roboto_700Bold,
                        color: COLORS.green,
                        textTransform: "capitalize",
                        textAlign: "center",
                        lineHeight: 22 * 1.2,
                    }}
                >
                 Confident Connect
                </Text>
                <Text
                    style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 16,
                        color: COLORS.black,
                        marginBottom: 37,
                        color: COLORS.gray2,
                        textAlign: "center",
                    }}
                >
                    Connectez-vous  à votre compte
                </Text>
                <InputField
                    contaynerStyle={{ marginBottom: 15 }}
                    placeholder="johndoe@mail.com"
                    leftIcon={<Mail />}
                     onChangeText={(text)=>{setEmail(text)}}

                />
                <InputField
                    leftIcon={<Lock />}
                    placeholder="*********************"
                    contaynerStyle={{ marginBottom: 37 }}
                    secureTextEntry={true}
                    onChangeText={(text)=>{setPassword(text)}}
                />
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingLeft: 20,
                        marginBottom: 18,
                    }}
                >
                    <TouchableOpacity
                        style={{ flexDirection: "row", alignItems: "center" }}
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
                        <Text
                            style={{
                                ...FONTS.Roboto_400Regular,
                                fontSize: 16,
                                color: COLORS.black,
                            }}
                        >
                            Se rappeler de moi
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_400Regular,
                                fontSize: 16,
                                color: COLORS.carrot,
                                paddingRight: 20,
                            }}
                        >
                                Mot de passe oublié  ?
                        </Text>
                    </TouchableOpacity>
                </View>
               <Button
                    title={loading ? <ActivityIndicator color="white" /> : "Continuer"}
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
                        N'avez-vous pas de compte ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}
                    >
                        <Text
                            style={{
                                ...FONTS.Roboto_500Medium,
                                fontSize: 16,
                                color: COLORS.green,
                            }}
                        >
                            {" "}
                        S'inscrire!
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
