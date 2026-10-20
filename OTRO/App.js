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

     <Perfil style={styles.tarjetas1} nombre="Lulu" carrera="ITIID" materia="Movil" cuatri="4"/>

     <Perfil style={styles.tarjetas2} nombre="Renata" carrera="ITIID" materia="Movil" cuatri="4"/>

     <Perfil style={styles.tarjetas3} nombre="Luisa" carrera="ITIID" materia="Movil" cuatri="4"/>
     
    </View>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjetas1:{
    backgroundColor:'lightblue'},
  tarjetas2:{backgroundColor: 'lightgreen'},
  tarjetas3:{backgroundColor: 'lightyellow'}
});