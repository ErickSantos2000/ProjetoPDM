import { StyleSheet, TouchableOpacity, Text} from 'react-native';

import { ThemedView } from '@/components/themed-view';
import Passaro from '@/components/passaro/Passaro';
import MyScrollView from '@/components/MyScrollView';
import { useState } from 'react';
import { PassaroInterface } from '@/interfaces/PassaroInterface';
import PassaroModal from '@/components/modals/PassaroModal';

export default function PassaroListScreen() {
  const [passaros, setPassaros] = useState<PassaroInterface[]>([]);
  const [modalvisivel, setModalVisivel] = useState<boolean>(false);
  const [selectPassaro, setSelectPassaro] = useState<PassaroInterface>();

  const adicionar = (apelido: string, sexo: string, id: number) => {

    if(!id || id <= 0){
      const newPassaro: PassaroInterface = {
        id_passaro: Math.random() * 1000,
        apelido: apelido,
        sexo: sexo,
      };

      const PassaroPlus: PassaroInterface[] = [...passaros, newPassaro];
    
      setPassaros(PassaroPlus);
    } else {
      passaros.forEach(passaro => {
        if(passaro.id_passaro == id) {
          passaro.apelido = apelido;
          passaro.sexo = sexo;
        }
      });

      // atualiza o estado da lista
      setPassaros([...passaros]); 
    }
    
    setModalVisivel(false);
  };

  const deletar = (id: number) => {
    const novoPassaro: Array<PassaroInterface> = [];

    for(let i = 0; i < passaros.length; i++){
      const passaro = passaros[i];

      if(passaro.id_passaro != id){
        novoPassaro.push(passaro)
      }
    }

    setPassaros(novoPassaro);
    setModalVisivel(false);
  }

  const openModal = () => {
    setSelectPassaro(undefined)
    setModalVisivel(true);
  };

  const closeModal = () => {
    setModalVisivel(false);
  };

  const openEditModal = (selectPassaro: PassaroInterface) => {
    setSelectPassaro(selectPassaro)
    setModalVisivel(true)
  }

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
          <TouchableOpacity onPress={() => openEditModal(passaro)}>
            <Passaro 
              key={passaro.id_passaro} 
              apelido={passaro.apelido} 
              sexo={passaro.sexo} 
            />
          </TouchableOpacity>
          
        ))}
      </ThemedView>

      <PassaroModal
        visivel={modalvisivel}
        cancelar={closeModal}
        adicionar={adicionar}
        deletar={deletar}
        passaro={selectPassaro}
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
    fontSize: 30,
    paddingHorizontal: 20,
  },
});

