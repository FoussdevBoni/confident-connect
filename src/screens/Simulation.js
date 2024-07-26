import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { storage } from '../firebase/firebaseConfig';

const API_KEY = '46080f1400c64c4182a5d57f30807831';

export default function App() {
  const [recording, setRecording] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [recordingUri, setRecordingUri] = useState('');

  const startRecording = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Désolé, nous avons besoin de l\'accès au microphone.');
        return;
      }

      const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      setRecording(null);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecordingUri(uri);

      // Téléverser l'audio vers Firebase Storage
      const audioUrl = await uploadAudio(uri);

      // Transcrire l'audio
      const text = await transcribeAudio(audioUrl);
      setTranscription(text);
    } catch (error) {
      console.error('Error stopping recording:', error);
    }
  };

  const uploadAudio = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = uri.split('/').pop();
      const storageRef = ref(storage, `audio/${filename}`);

      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);

      return url;
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  const transcribeAudio = async (audioUrl) => {
    try {
      const response = await axios.post(
        'https://api.assemblyai.com/v2/transcript',
        {
          audio_url: audioUrl,
        },
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      const transcriptId = response.data.id;

      let result;
      do {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5 seconds
        const { data } = await axios.get(
          `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        result = data;
      } while (result.status !== 'completed');

      return result.text;
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };

  return (
    <View>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
      <Text>Transcription: {transcription}</Text>
    </View>
  );
}
