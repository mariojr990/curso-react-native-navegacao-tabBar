import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home() {
const nav = useNavigation();

 return (
   <View>
       <Text>Home</Text>
       <Button
       title="Contato"
       onPress={ () => nav.navigate('Contato')}/>
       <Icon
       name='ios-call' color="#ff0000" size={30}
       /> 
   </View>
  );
}