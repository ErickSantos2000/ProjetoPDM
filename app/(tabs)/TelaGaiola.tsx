import React, { useEffect } from "react";
import { Text, View, StyleSheet,TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";
import { GaiolaInterface } from "@/interfaces/GaiolaInterface";

export type GaiolaTelaProps = {
    adicionar: (nome: string, material: string, tipo: string, id: number) => void;
    cancelar: () => void;
    deletar: (id: number) => void;
    gaiola?: GaiolaInterface;
};

export default function TelaGaiola({ adicionar, cancelar, deletar, gaiola}: GaiolaTelaProps) {
    const [nome, setNome] = useState('');
    const [material, setMaterial] = useState('');
    const [tipo, setTipo] = useState('');
    const [id, setId] = useState<number>(0);

    useEffect(() => {
      if(gaiola){
          setNome(gaiola.nome);
          setMaterial(gaiola.material);
          setTipo(gaiola.tipo);
          setId(gaiola.id_gaiola);
      } else {
          setNome('');
          setMaterial('');
          setTipo('');
          setId(0);
      }
    }, [gaiola])

  return (
      <View style={styles.container}>
          <TextInput
            style={styles.boxInput}
            placeholder='Nome'
            value={nome}
            onChangeText={text => setNome(text)}
            autoFocus
          />

          <TextInput
            style={styles.boxInput}
            value={material}
            onChangeText={text => setMaterial(text)}
            placeholder='Material'
          />

          <TextInput
            style={styles.boxInput}
            value={tipo}
            onChangeText={text => setTipo(text)}
            placeholder='Tipo'
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => adicionar(nome, material, tipo, id)}>
              <Text style={styles.buttonText}>
                Salvar
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCancel} onPress={() => cancelar()}>
              <Text style={styles.buttonText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonDelete} onPress={() => deletar(id)} disabled = {id <= 0}>
              <Text style={styles.buttonText}>
                Deletar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',

    flex: 1,
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonAdd: {
    backgroundColor: 'green',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  buttonCancel: {
    backgroundColor: 'orange',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  buttonDelete: {
    backgroundColor: 'red',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    height: 70,
  },
  boxInput: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#DDD',
    margin: 5,
  },
});
