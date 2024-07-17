import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import TabAppBar from '../components/TabAppBar';
import { useNavigation } from '@react-navigation/native';

const features = [
  { name: 'Conversation Réelle', icon: 'chat' },
  { name: 'Rencontres et Relations Amoureuses', icon: 'favorite' },
  { name: 'Situations Professionnelles', icon: 'work' },
  { name: 'Gestion de la Dépression et du Burnout', icon: 'healing' },
];

const FeatureCard = ({ name, icon }) => {
    const navigation = useNavigation()
    const feature =  { name, icon }
  return (
   <TouchableOpacity onPress={()=>{navigation.navigate('chat-quiz' , {feature})}}>
     <Card containerStyle={styles.card} >
      <View style={styles.iconContainer}>
        <Icon name={icon} size={40} color="#517fa4" />
      </View>
      <Text style={styles.featureText}>{name}</Text>
    </Card>
   </TouchableOpacity>
  );
};

const Home = ({user}) => {
   
  return (
  <View style={{flex: 1}}>
      <FlatList
      data={features}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <FeatureCard name={item.name} icon={item.icon} />}
      contentContainerStyle={styles.container}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
