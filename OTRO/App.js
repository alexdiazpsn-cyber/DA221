/* 1. Zona Importaciones */

import { StyleSheet, View,} from 'react-native';
import MenuScreen from './screens/MenuScreen';

/* 2. Zona Render o Main */
export default function App() {
  return (
    <View style={styles.container}>
     <MenuScreen/>
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