import{ StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import { useState } from 'react';

export default function PresseableScreen() {
    const [mensaje, setMensaje] = useState('Presiona el boton');
    const [activado, setActivado] = useState(false);

    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>Pressable</Text>

        <Text>{mensaje}</Text>

        <Pressable
          onPress={() => setMensaje("Botón presionado")}
          onPressIn={() => setMensaje("Inicio de pulsación")}
          onPressOut={() => setMensaje("Fin de la pulsación")}
          onLongPress={() => setMensaje("Pulsación prolongada")}
          disabled={false}
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
          ]}
        >
          <Text style={styles.textoBoton}>Presióname</Text>
        </Pressable>

        <View style={styles.separador} />

        <Text style ={styles.titulo}>Switch</Text>
        
        <Text>
            Estado: {activado ? "Activado" : "Desactivado"}
        </Text>
        <Switch>
            value={activado}
            onValueChange={setActivado}
            disabled={false}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={activado ? "#f5dd4b" : "#f4f3f4"}
        </Switch>

        
      </View>
    );
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  botonPresionado: {
    backgroundColor: '#0b5ea8',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
  },
  separador: {
    height: 1,
    width: '80%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});
