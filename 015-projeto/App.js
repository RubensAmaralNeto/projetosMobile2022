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
      <TextInput style={styles.inputText} label="informe o seu Nome" secureTextEntry={true} placeholder="Informe o seu nome" onChangeText={firstName => setFirstNameText(firstName)}  />
    
      <Text style={styles.labelText}> sobreNome: </Text>
      <TextInput style={styles.inputText} label="informe o seu sobreNome" secureTextEntry={true} placeholder="Informe o seu sobreNome" onChangeText={lastName => setLastNameText(lastName)}  />

      <Text style={styles.labelText}> Email: </Text>
      <TextInput style={styles.inputText} label="informe o e-mail" secureTextEntry={true} placeholder="Informe o seu e-mail" onChangeText={email => setEmailText(email)}  />

      <Text style={styles.labelText}> Senha: </Text>
      <TextInput style={styles.inputText} label="Senha" secureTextEntry={true} placeholder="Informe a sua senha" onChangeText={password => setLastNameText(password)}  />
    

      <Button title="Submit" style={styles.buttonstyle} color="6200EE" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText:{
    marginTop: 10,
    marginBotton: 5,
  },
  inputText:{
    height: 45,
    marginBottom: 15
  },
  buttonStyles:{
    marginTop: 10
  },
});
