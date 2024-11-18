import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SpecialistsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encuentra veterinarios</Text>
      <Text style={styles.description}>
      Busca y guarda a tus veterinarios favoritos para facilitar futuras consultas y revisiones. Guárdalos haciendo clic en el ícono 💚.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Guardar especialistas →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#00796b',
    fontWeight: 'bold',
  },
});
