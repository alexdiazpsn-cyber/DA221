/* 1. Zona Importaciones */

import { StyleSheet, View, Text} from 'react-native';

/* 2. Zona Render o Main */
export default function SafeScreen() {
  return (
    <View style={styles.container}>

           <text>Practica 10</text>
           <text> Diego o Saúl</text>

    </View>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});