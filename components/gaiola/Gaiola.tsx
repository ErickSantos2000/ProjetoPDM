import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type GaiolaProps = {
    nome: string;
    material: string;
    tipo: string;
}

export default function Gaiola({nome, material, tipo} : GaiolaProps){
    return(
        <View style={styles.box}>
            <Text style={styles.title}>{nome}</Text>
            <Text style={styles.subTitle}>{material}</Text>
            <Text style={styles.subTitle}>{tipo}</Text>
        </View>
    );
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