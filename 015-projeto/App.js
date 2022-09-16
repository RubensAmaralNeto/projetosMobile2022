import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, component } from "react";
import { StyleSheet, Text, View, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState('');
  const [lastName, setLastNameText] = useState('');
  const [email, setEmailText] = useState('');
  const [password, setPasswordText] = useState('');
  const [msgErr, setmsgErrText] = useState('');

  const validateAll = () => {
    console.log("Validando forma");
    
    validateStrSize(firstName);
    
    validateStrSize(lastName);
    validateStrSize(email);
    validateStrSize(password);
  }

  const validateStrSize = (text) => 
  {
    if( text.length <= 3){
      console.log("Campo preechido incorretamente.");
      setmsgErrText("Algum campo preechido incorretamente.");
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}> Nome: </Text>
      <TextInput style={styles.inputText} label="Nome" placeholder="Informe o seu nome" onChangeText={firstName => setFirstNameText(firstName)}  />
    
      <Text style={styles.labelText}> sobreNome: </Text>
      <TextInput style={styles.inputText} label="sobreNome" placeholder="Informe o seu sobreNome" onChangeText={lastName => setLastNameText(lastName)}  />

      <Text style={styles.labelText}> Email: </Text>
      <TextInput style={styles.inputText} label="Email" placeholder="Informe o seu e-mail" onChangeText={email => setEmailText(email)}  />

      <Text style={styles.labelText}> Senha: </Text>
      <TextInput style={styles.inputText} label="Senha" secureTextEntry={true} placeholder="Informe a sua senha" onChangeText={password => setPasswordText(password)}  />
    

      <Button title="Submit" onPress={() => validateAll()} style={styles.buttonstyles} color="#6200EE" />
      <Text>{msgErr}</Text>
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
    marginTop: 15,
    marginBotton:5
  },
  inputText:{    
    height: 45,
    marginBottom: 15
  },
  buttonstyles:{
    marginTop: 10
  },
});
