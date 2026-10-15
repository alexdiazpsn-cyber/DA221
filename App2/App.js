import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludo from '../OTRO/components/saludo';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hola, bienvenido a la aplicación!</Text>
            <image source={require('./assets/wave.png')}  />

            <text>----------------------------------</text>
            <Saludo> </Saludo>

            
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});