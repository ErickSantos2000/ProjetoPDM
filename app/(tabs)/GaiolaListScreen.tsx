import { StyleSheet, TouchableOpacity, Text} from 'react-native';

import { ThemedView } from '@/components/themed-view';
import Gaiola from '@/components/gaiola/Gaiola';
import MyScrollView from '@/components/MyScrollView';
import { useState } from 'react';
import { GaiolaInterface } from '@/interfaces/GaiolaInterface';
import GaiolaModal from '@/components/modals/GaiolaModal';

export default function GaiolaListScreen() {
  const [gaiolas, setGaiolas] = useState<GaiolaInterface[]>([]);
  const [modalvisivel, setModalVisivel] = useState<boolean>(false);
  const [selectGaiola, setSelectGaiola] = useState<GaiolaInterface>();

  const adicionar = (nome: string, material: string, tipo: string, id: number) => {
    if(!id || id <= 0){
      const newGaiola: GaiolaInterface = {
          id_gaiola: Math.random() * 1000,
          nome: nome,
          material: material,
          tipo: tipo
      };

      const GaiolaPlus: GaiolaInterface[] = [
        ...gaiolas,
        newGaiola
      ];

      setGaiolas(GaiolaPlus);
    } else {
      gaiolas.forEach(gaiola => {
        if(gaiola.id_gaiola == id) {
          gaiola.nome = nome;
          gaiola.material = material;
          gaiola.tipo = tipo;
        }
      });
      setGaiolas([...gaiolas]);
    }
    setModalVisivel(false);
  };

  const deletar = (id: number) => {
    const novalista: Array<GaiolaInterface> = [];

    for(let i = 0; i < gaiolas.length; i++){
      const gaiola = gaiolas[i];

      if(gaiola.id_gaiola != id){
        novalista.push(gaiola)
      }
    }

    setGaiolas(novalista);
    setModalVisivel(false);
  }

  const openModal = () => {
    setSelectGaiola(undefined)
    setModalVisivel(true);
  };

  const closeModal = () => {
    setModalVisivel(false);
  };

  const openEditModal = (selectGaiola: GaiolaInterface) => {
    setSelectGaiola(selectGaiola)
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
        {gaiolas.map(gaiola => (
          <TouchableOpacity onPress={() => openEditModal(gaiola)}>
            <Gaiola 
              key={gaiola.id_gaiola} 
              nome={gaiola.nome} 
              material={gaiola.material} 
              tipo={gaiola.tipo} 
            />
          </TouchableOpacity>
        ))}
      </ThemedView>

      <GaiolaModal
        visivel={modalvisivel}
        cancelar={closeModal}
        adicionar={adicionar}
        deletar={deletar}
        gaiola={selectGaiola}
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
