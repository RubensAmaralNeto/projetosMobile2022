import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, component } from "react";
import { StyleSheet, Text, View, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput, HelperText } from 'react-native-paper';

export default function App() {
  const [firstName, setFirstNameText] = useState('');
  const [lastName, setLastNameText] = useState('');
  const [email, setEmailText] = useState('');
  const [password, setPasswordText] = useState('');
  const [msgErr, setmsgErrText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [btnEnable, setbtnEnable] = useState(true);

  const validateAll = () => {
    console.log("Validando forma");
    validateStrSize(firstName);
    validateStrSize(lastName);
    validateStrSize(email);
    validateStrSize(password);
  }

  const validateStrSize = (text) => {
    if( text.length <= 3){
      console.log("Campo preechido incorretamente.");
      setmsgErrText("Algum campo preechido incorretamente.");
      return false;
    }
  }

  const validateMail = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      //console.log(text, reg.test(text));
      return !reg.test(email);
  }; 

  const validatePassword = () => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    //console.log(reg.test(password));
    //console.log(!reg.test(email));
    return !reg.test(password);

  };
  
  const validateName = () => {

    //console.log(firstName.length);
    //firstName = firstName.trim();
    var cleanStr=firstName.trim();
    //console.log(cleanStr);
    if (cleanStr.length >= 3) {
       return false;
    }
  };

  const validatelastName = () => {
    //console.log(firstName.length);
    //firstName = firstName.trim();
    var cleanStr=lastName.trim();
    //console.log(cleanStr);
    if (cleanStr.length >= 3) {
      return false;
    }
  };


  return (
    <View style={styles.container}>

     {/*inicio campo nome */}
      <Text style={styles.labelText}> Nome: </Text>
      <TextInput style={styles.inputText} label="Nome" placeholder="Informe o seu nome" onChangeText={firstName => setFirstNameText(firstName)}  />

      <HelperText type="error" visible={validateName()}>
         O campo nome está invalido!
      </HelperText>
     {/* fim campo nome */}

      {/*inicio campo sobrenome */}
      <Text style={styles.labelText}> sobreNome: </Text>
      <TextInput style={styles.inputText} label="sobreNome" placeholder="Informe o seu sobreNome" onChangeText={lastName => setLastNameText(lastName)}  />

      <HelperText type="error" visible={validatelastName()}>
         O campo sobreNome está invalido!
      </HelperText>
      {/*fim campo sobrenome */}

      {/*inicio campo email */}
      <Text style={styles.labelText}> Email: </Text>
      <TextInput style={styles.inputText} label="Email" placeholder="Informe o seu e-mail" onChangeText={email => setEmailText(email)} defaultValue={email} />

      <HelperText type="error" visible={validateMail()}>
         O campo e-mail está invalido!
      </HelperText>

      {/*fim campo email */}

      {/*inicio campo senha */}
      <Text style={styles.labelText}> Senha: </Text>
      <TextInput style={styles.inputText} label="Senha" secureTextEntry={secureTextEntry} placeholder="Informe a sua senha" onChangeText={password => setPasswordText(password)} right = { <TextInput.Icon name = "eye"  onPress={() => {setSecureTextEntry(!secureTextEntry);return false;}} />} />   

      <HelperText type="error" visible={validatePassword()}>
         O campo senha está invalido!
      </HelperText>
      
      {/*fim campo senha */}

      <Button title="Submit" style={styles.buttonstyle} disabled={btnEnable} color="#6200EE" />
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
