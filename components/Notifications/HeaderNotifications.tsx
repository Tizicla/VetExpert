import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderNotifications() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mensajes</Text>
      <Text style={styles.subtitle}>BANDEJA DE ENTRADA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
          marginBottom: 16,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#000',
        },
        subtitle: {
          fontSize: 14,
          fontWeight: '600',
          color: '#7a7a7a',
          marginTop: 4,
        },
      });
      
      
