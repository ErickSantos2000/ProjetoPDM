import React from "react";
import { Text, View, StyleSheet,TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";

export type PassaroModalProps = {
    visivel: boolean;
    onAdd: (apelido: string, especie: string, anilha: string, idade: number, sexo: string) => void;
    onCancel: () => void;
};

export default function PassaroModal({visivel, onAdd, onCancel}: PassaroModalProps) {
    const [apelido, setApelido] = useState('');
    const [especie, setEspecie] = useState('');
    const [anilha, setAnilha] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

  return (
    <Modal visible={visivel} animationType='fade' transparent={true} onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <TextInput
            style={styles.boxInput}
            placeholder='Apelido'
            value={apelido}
            onChangeText={text => setApelido(text)}
            autoFocus
          />

          <TextInput
            style={styles.boxInput}
            value={especie}
            onChangeText={text => setEspecie(text)}
            placeholder='Especie'
          />

          <TextInput
            style={styles.boxInput}
            value={anilha}
            onChangeText={text => setAnilha(text)}
            placeholder='Analiha'
          />
          <TextInput
            style={styles.boxInput}
            value={idade}
            onChangeText={text => setIdade(text)}
            placeholder='Idade'
            keyboardType="numeric"
          />
          <TextInput
            style={styles.boxInput}
            value={sexo}
            onChangeText={text => setSexo(text)}
            placeholder='Sexo'
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd(apelido, especie, anilha, Number(idade), sexo)}>
              <Text style={styles.buttonText}>
                Add
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancel()}>
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
