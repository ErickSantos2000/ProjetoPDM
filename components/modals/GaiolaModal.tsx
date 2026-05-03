import React from "react";
import { Text, View, StyleSheet,TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";

export type GaiolaModalProps = {
    visivel: boolean;
    adicionar: (nome: string, material: string, tipo: string) => void;
    cancelar: () => void;
};

export default function GaiolaModal({visivel, adicionar, cancelar}: GaiolaModalProps) {
    const [nome, setNome] = useState('');
    const [material, setMaterial] = useState('');
    const [tipo, setTipo] = useState('');

  return (
    <Modal visible={visivel} animationType='fade' transparent={true} onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
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
            <TouchableOpacity style={styles.buttonAdd} onPress={() => adicionar(nome, material, tipo)}>
              <Text style={styles.buttonText}>
                Add
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCancel} onPress={() => cancelar()}>
              <Text style={styles.buttonText}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  boxContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
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
