import { StyleSheet, TouchableOpacity, Text} from 'react-native';

import { ThemedView } from '@/components/themed-view';
import Passaro from '@/components/passaro/Passaro';
import MyScrollView from '@/components/MyScrollView';
import { useState } from 'react';
import { PassaroInterface } from '@/interfaces/PassaroInterface';
import StudentModal from '@/components/modals/PassaroModal';
import PassaroModal from '@/components/modals/PassaroModal';

export default function StudentsListScreen() {
  const [passaros, setPassaros] = useState<PassaroInterface[]>([]);
  const [modalvisivel, setModalVisivel] = useState<boolean>(false);

  const adicionar = (apelido: string, anilha: string, especie: string, sexo: string, idade: number, id_gaiola: number) => {
    const newPassaro: PassaroInterface = {
        id_passaro: Math.random() * 1000,
        apelido: apelido,
        anilha: anilha,
        especie: especie,
        sexo: sexo,
        idade: idade,
        id_gaiola: id_gaiola
    };

    const PassaroPlus: PassaroInterface[] = [
      ...passaros,
      newPassaro
    ];

    setPassaros(PassaroPlus);
    setModalVisivel(false);
  };

  const openModal = () => {
    setModalVisivel(true);
  };

  const closeModal = () => {
    setModalVisivel(false);
  };

  return (
    <MyScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => openModal()}>
          <Text style={styles.headerButton}>+</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.container}>
        {passaros.map(passaro => (
          <Passaro 
            key={passaro.id_passaro} 
            apelido={passaro.apelido} 
            anilha={passaro.anilha} 
            especie={passaro.especie} 
            sexo={passaro.sexo} 
            idade={passaro.idade} 
          />
        ))}
      </ThemedView>

      <PassaroModal
        visivel={modalvisivel}
        cancelar={closeModal}
        adicionar={adicionar}
      />
    </MyScrollView>
  );
}
  

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    bottom: 0,
    left: 0,
    position: 'absolute', 
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  headerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    fontWeight: 'bold',
    fontSize: 50,
    paddingHorizontal: 20,
  },
});

