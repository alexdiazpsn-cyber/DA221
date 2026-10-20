/* 1. Zona Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/saludo';
import { Saludo2 } from './components/saludo2';
import {Perfil} from './components/perfil';
/* 2. Zona Render o Main */
export default function App() {
  return (
    <View style={styles.container}>

     <Perfil nombre="Lulu" carrera="ITIID" materia="Movil" cuatri="4"/>

     <Perfil nombre="Renata" carrera="ITIID" materia="Movil" cuatri="4"/>

     <Perfil nombre="Luisa" carrera="ITIID" materia="Movil" cuatri="4"/>
     
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