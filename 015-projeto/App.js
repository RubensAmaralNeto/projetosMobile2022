import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, component } from "react";
import { StyleSheet, Text, View, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState(null);
  const [lastName, setLastNameText] = useState(null);
  const [email, setEmailText] = useState(null);
  const [password, setPasswordText] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}> Nome: </Text>
      <TextInput style={styles.inputText} placeholder="Informe o seu nome" onChangeText={firstName => setFirstNameText(firstName)}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText:{
    marginTop: 10,
    marginBotton: 5,
  },
});
