import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const DatesCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Reserva la próxima cita de tu mascota</Text>
      <Text style={styles.subtitle}>
        La prevención en salud es esencial. Cuida de su salud y reserva una cita ahora.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Encontrar veterinario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default DatesCard;
