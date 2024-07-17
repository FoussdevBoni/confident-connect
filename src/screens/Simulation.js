import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Title } from 'react-native-paper';
import { colors } from '../data/colors';

function Simulation({user}) {
    const route = useRoute()
    const {avatar} = route.params
    
    return (
        <View style={styles.container}>
            <View style={styles.room}>
               <View style={styles.section}>
                  <View style={styles.avatarContainer}>
                    <Image source={{uri: avatar.profile}} style={styles.avatar}/>
                  </View>
                  <Title>
                    {avatar.name}
                  </Title>
               </View>
               <View style={styles.section}>
                   <View style={styles.avatarContainer}>
                    <Image source={{uri: user?.profile ||""}} style={styles.avatar}/>
                  </View>
                  <Title>
                    {user.fullName}
                  </Title>
               </View>
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
const {width , height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    room: {
        flexDirection: 'column'
    } , 
    section:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: height*0.45,
    width: width*0.8
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

  name: {
 textAlign: 'center'
  },
   btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: colors.primary,
  },
})