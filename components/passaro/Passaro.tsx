import React from "react";
import { StyleSheet, Text, View } from "react-native";

// "type PassaroProps" é uma forma de dar apelido a um conjunto de regras
// "passaro" é o nome do meu componente e "props" é a abreviacao de properties
export type PassaroProps = {
    apelido: string;
    especie: string;
    anilha: string;

    idade: number;
    sexo: string;
}

export default function Passaro({apelido, especie, anilha, idade, sexo} : PassaroProps){
    return(<
        View style={styles.box}>
            <Text style={styles.title}>{apelido}</Text>
            <Text style={styles.subTitle}>{especie}</Text>
            <Text style={styles.subTitle}>{anilha}</Text>
            <Text style={styles.subTitle}>{`${idade}`}</Text>
            <Text style={styles.subTitle}>{sexo}</Text>
        </View>)
    ;
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
  },
});