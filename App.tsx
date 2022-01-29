
import { SafeAreaView, StyleSheet, Text, View , StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';
import normalize from 'react-native-normalize';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
        <StatusBar
      backgroundColor='black'
      barStyle = 'light-content'
      />
      <CalculadoraScreen />
    </SafeAreaView>

  );
}

