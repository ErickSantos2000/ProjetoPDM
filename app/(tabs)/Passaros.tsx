import { StyleSheet, ScrollView, Image, View, Text, Dimensions } from 'react-native';

// Pegamos a largura da tela para cálculos se necessário
const { width } = Dimensions.get('window');

export default function Passaros() {
  const meusPassaros = [
    { 
      id: 1, 
      nome: 'Papa-capim', 
      desc: 'Conhecido pelo seu canto melodioso e por ser encontrado em campos e pastagens.',
      imagem: require('../../assets/images/2 - Papa.png') 
    },
    { 
      id: 2, 
      nome: 'Galo de Campina', 
      desc: 'Um dos pássaros mais bonitos e famosos do Nordeste brasileiro, com sua cabeça vermelha vibrante.',
      imagem: require('../../assets/images/1 - Galo.png') 
    },
    { 
      id: 3, 
      nome: 'Trinca-ferro', 
      desc: 'Valorizado pelo seu canto forte e potente, é uma espécie muito apreciada por criadores.',
      imagem: require('../../assets/images/3 - Trinca.png')
    },
  ];

  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pássaros do AGCP</Text>
      <Text style={styles.titleDesc}>Bem-vindos à Associação Guarabirense de Criadores de Pássaros!</Text>
      
      {meusPassaros.map((passaro) => (
        <View key={passaro.id} style={styles.card}>  
          <Image source={passaro.imagem} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.cardTitle}>{passaro.nome}</Text>
            <Text style={styles.cardText}>{passaro.desc}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f5f5f5', // Um cinza bem claro no fundo destaca os cards brancos
  },
  container: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30, // Espaço extra no final do scroll
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32', // Um verde floresta combina com o tema de pássaros
    marginBottom: 5,
  },
  titleDesc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: '90%', 
    backgroundColor: '#fff',
    marginVertical: 12,
    // bordas mais arredondadas
    borderRadius: 15, 
    overflow: 'hidden',
    // sombra
    elevation: 4,
    // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 16, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});