// screens/AvatarSelectionScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StackAppBarr from '../components/StackAppBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../data/colors';

const avatars = [
  { id: 1, profile:  'https://static.vecteezy.com/ti/vecteur-libre/p3/3483457-avatar-femme-portrait-d-une-jeune-femme-dans-un-style-retro-vectoriel.jpg'} ,
  { id: 2, profile: 'https://static.vecteezy.com/ti/vecteur-libre/p3/10967316-avatar-homme-barbu-gratuit-vectoriel.jpg'},
  // Ajouter d'autres avatars ici
];

const voices = [
  { id: 1, name: 'Voix 1' },
  { id: 2, name: 'Voix 2' },
  { id: 3, name: 'Voix 3' },
    { id: 4, name: 'Voix 4' },
    { id: 4, name: 'Voix 5' },

  // Ajouter d'autres voix ici
];

const AvatarSelectionScreen = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [avatarName, setAvatarName] = useState('');
  const [selectedVoice, setSelectedVoice] = useState(null);
   const route  = useRoute()
   const {feature} = route.params

  const handleAvatarSelect = (item) => {
    setSelectedAvatar(item);
  };

  const handleVoiceSelect = (id) => {
    setSelectedVoice(id);
  };
  const navigation = useNavigation()
  const handleConfirm = () => {
    const avatar = {
      name: avatarName ,
      profile: selectedAvatar.profile,

    }
    navigation.navigate('avatar-created-successful' , {avatar})
  };

  const renderAvatarItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleAvatarSelect(item)}>
      <Image
        source={{uri: item.profile}}
        style={[styles.avatar, selectedAvatar === item && styles.selectedAvatar]}
      />
    </TouchableOpacity>
  );

  const renderVoiceItem = ({ item }) => (
    <TouchableOpacity style={[styles.voiceButton, selectedVoice === item.id && styles.selectedVoiceButton]} onPress={() => handleVoiceSelect(item.id)}>
      <Text style={styles.voiceButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
     <View style={{flex: 1}}>
        <StackAppBarr title={'Créer mon avatar personnalisé'}/>
         <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez votre avatar</Text>
      <FlatList
        data={avatars}
        renderItem={renderAvatarItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.avatarContainer}
      />
      <TextInput
        style={styles.textInput}
        value={avatarName}
        onChangeText={setAvatarName}
        placeholder="Donnez un nom à votre avatar..."
      />
      <Text style={styles.subtitle}>Sélectionnez une voix</Text>
      <FlatList
        data={voices}
        showsHorizontalScrollIndicator={false}
        renderItem={renderVoiceItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.voiceContainer}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Créer l'avatar personnalisé</Text>
      </TouchableOpacity>
    </View>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderColor: '#007BFF',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
  },
  voiceContainer: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  voiceButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 10,
    height: 50,
  },
  selectedVoiceButton: {
    borderColor: '#007BFF',
  },
  voiceButtonText: {
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 200,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AvatarSelectionScreen;
