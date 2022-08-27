import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

// export default function App() {
// return (
//    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
//    </View>
//  );
//}

function Separator() {

  return <View Style={styles.separator} />
}

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
//    </SafeAreaView>  )
    <View>
      <Button title= "Aperte aqui" on Press={() => {alert('Simples')
}} />
    </View>
    <Separator />
    <View>
    <Text style={styles.title}>
      Adjust the color in a way that looks stander on each plataform. On iOs, the color prop controls the color of text.On Android, the color adjusts the

    </Text>
    <Button
      title="Aperte aqui"
      color="f194ff"
      onPress{() => {alert('button with adjusted color pressed')
}}
    />
  </View>
  <Separator />
  <View>
    <Text style={styles.title}>
      All interaction for the component are disabled.
      </Text>
      <Button
        title="Aperte aqui"

        disabled
        onPress={() => {('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}></Text>



//   styles = StyleSheet.create({
// container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
// });
