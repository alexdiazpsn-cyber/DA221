import {Text, Image, Button, View} from 'react-native';

import {text} from 'react-native';

export const Saludo2 = () => {
    return (
        <View>
            <Text>Hola, bienvenido a la aplicación!</Text>
            <Image source={require('../assets/wave.png')} />
            <Button title="Presiona aquí para saludar" />
        </View>
    );
}

const estilos= StyleSheet.create({ })