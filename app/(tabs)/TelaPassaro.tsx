import React, { useEffect } from "react";
import { Text, View, StyleSheet,TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from "react";
import { PassaroInterface } from "@/interfaces/PassaroInterface";

export type PassaroTelaProps = {
    adicionar: (apelido: string, sexo: string, id: number) => void;
    cancelar: () => void;
    deletar: (id: number) => void;
    passaro?: PassaroInterface;
};

export default function TelaPassaro({ adicionar, cancelar, deletar, passaro}: PassaroTelaProps) {
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [id, setId] = useState<number>(0);

    // O useEffect monitora o objeto passaro que vem da tela de listagem
    useEffect(() => {
      if(passaro){
          // se clicar em um passaro existente, é preenchido o formulario com os dados dele
          setApelido(passaro.apelido);
          setSexo(passaro.sexo);
          setId(passaro.id_passaro);
      } else {
          // Se clicamos no botão "+", o formulario limpado para um novo cadastro
          setApelido('');
          setSexo('');
          setId(0);
      }
    }, [passaro]) // [passaro] indica que o monitor deve rodar sempre que o passaro selecionado mudar

  return (
   
      <View style={styles.container}>

          <TextInput
            style={styles.boxInput}
            placeholder='Apelido'
            value={apelido}
            onChangeText={text => setApelido(text)}
            autoFocus
          />

          <TextInput
            style={styles.boxInput}
            value={sexo}
            onChangeText={text => setSexo(text)}
            placeholder='Sexo'
          />


          <View style={styles.buttonContainer}>
         
            <TouchableOpacity style={styles.buttonAdd} onPress={() => adicionar(apelido, sexo, id)}>
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
