import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Title, Card } from 'react-native-paper';
import { colors } from '../data/colors';

function Simulation({ user }) {
    const route = useRoute();
    const { avatar } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.room}>
                <Card style={styles.card}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: avatar.profile || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&s" }} style={styles.avatar} />
                        <Title style={styles.name}>{avatar.name}</Title>
                    </View>
                </Card>
                <Card style={styles.card}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: user?.profile || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vB-49_BT-dirwttYZaeE_VByjlQ3raVJZg&s" }} style={styles.avatar} />
                        <Title style={styles.name}>{user.fullName}</Title>
                    </View>
                </Card>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>
                    Arrêter la simulation
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Simulation;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    room: {
        flexDirection: 'column', // Les avatars en colonne
        justifyContent: 'space-around',
        width: '80%', // Ajustement de la largeur
        marginBottom: 20,
    },
    card: {
        marginVertical: 10,
        borderRadius: 10, // Coin arrondi de la card
        backgroundColor: colors.primary
    },
    avatarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
    },
    avatar: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#25D366', // Couleur de bordure verte similaire à WhatsApp
    },
    name: {
        textAlign: 'center',
        color: 'white', // Couleur du texte blanche pour contraste
        marginTop: 5,
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: 'red', // Couleur du bouton similaire à WhatsApp
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: 'white',
    },
});
