/* 1. Zona Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import{ Saludo } from './components/saludo';
import{ Saludo2 } from './components/saludo2';

/* 2. Zona Render o Main*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native!</Text>
      <Image source={require('./assets/wave.png')}></Image>

      <Text>---------------------------------</Text>

    
      <Saludo/>

      <Text>---------------------------------</Text>

    
      <Saludo2/>

      <StatusBar style="auto" />
    </View>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});