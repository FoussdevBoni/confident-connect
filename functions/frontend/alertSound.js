import * as Speech from 'expo-speech';

 export const speak = (message) => {
    Speech.speak(message);
  };