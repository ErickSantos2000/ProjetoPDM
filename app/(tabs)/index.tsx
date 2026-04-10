import { StyleSheet, TouchableOpacity, Alert, Text, View } from 'react-native';

export default function TabOneScreen() {
  
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo!</Text>
        
        {/* Separador padrão usando apenas estilo */}
        <View style={styles.separator} />
        
        <Text style={styles.subtitle}>
          Esta é a Atividade para criação de Tabs.
        </Text>

       
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Atividade de Tabs - 2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Cor de fundo padrão
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 10,
    lineHeight: 24,
    color: '#000',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '40%',
    backgroundColor: '#eee', // Cor fixa para o separador
  },

  footer: {
    opacity: 0.4,
  },
  footerText: {
    fontSize: 12,
  },
});