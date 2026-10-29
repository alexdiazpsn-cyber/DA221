/* 1. Zona Importaciones */

import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';

/* 2. Zona Render o Main */
export default function SafeScreen() {
  const canciones = ['1', '2', '3', '4', '5', '6', '7'.at, '8', '9', '10', '11', '12', '13', '14', '15'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Canciones</Text>

      <View style={styles.reproductor}>
        <Text style={styles.texto}>Lista de música</Text>
        <Text>La música más escuchada</Text>
      </View>

      <Text style={styles.subtitulo}>Canciones</Text>

      <ScrollView style={styles.lista}>
        {canciones.map((item) => (
          <View key={item} style={styles.tarjeta}>
            <Text style={styles.textolista}>Canción {item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* 3. Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  reproductor: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  lista: {
    flex: 1,
  },
  tarjeta: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
  textolista: {
    fontSize: 18,
    textAlign: 'center',
  }
});