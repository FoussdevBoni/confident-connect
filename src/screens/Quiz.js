// screens/ChatScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import StackAppBarr from '../components/StackAppBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { colors } from '../data/colors';

const ChatScreen = () => {
     const route  = useRoute()
   const {feature} = route.params
   
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Comment vous appelez-vous ?", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);

  const questions = [
    "Enchanté ! Quel âge avez-vous ?",
    "Quel est votre passe-temps favori ?",
    "Où habitez-vous ?",
    "Merci pour vos réponses ! Vous avez terminé le questionnaire."
  ];

  useEffect(() => {
    // Ajouter la prochaine question de l'IA après la réponse de l'utilisateur
    if (step > 0 && step < questions.length) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: questions[step], isUser: false }
      ]);
    }
  }, [step]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      setStep(step + 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.isUser ? styles.userMessage : styles.aiMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StackAppBarr title={feature.name} goBack={navigation.goBack} />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />
      {step < questions.length - 1 && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="Tapez votre réponse..."
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Icon name='send' />
          </TouchableOpacity>
        </View>
      )}
      {step === questions.length - 1 && (
        <View style={styles.simulationButtonContainer}>
          <TouchableOpacity
            style={{backgroundColor: colors.primary , padding: 10 , borderRadius: 18 , width: '80%'}}
            onPress={() => {
              navigation.navigate('create-avatar' , {feature})
            }}
          >
            <Text style={{color: 'white' , textAlign: 'center'}}>
               Faire une simulation
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  simulationButtonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
});

export default ChatScreen;
