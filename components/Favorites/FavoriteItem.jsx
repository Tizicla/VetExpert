import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FavoriteItem({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  details: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Montserrat-Regular',
  },
});
