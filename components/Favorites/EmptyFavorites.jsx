import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function EmptyFavorites() {
  return (
  
    <View style={styles.container}>
      <Image source={require('./../../assets/images/empty.jpg')} style={styles.image} />
      <Text style={styles.message}>Aún no tienes favoritos.</Text>
      <Text style={styles.subMessage}>Explora y guarda tus veterinarios favoritos aquí.</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 5,
  },
  subMessage: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
});
