import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla

// Lista de categorías con imágenes locales
const categories = [
  {
    id: '1',
    name: 'Perros y gatos',
    image: require('./../../assets/images/pawprint.png'), // Ruta de la imagen local
  },
  {
    id: '2',
    name: 'Anfibios',
    image: require('./../../assets/images/frog.png'),
  },
  {
    id: '3',
    name: 'Ganado',
    image: require('./../../assets/images/livestock.png'),
  },

];

export default function Category() {
  // Renderizar cada tarjeta de categoría
  const renderCategoryItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Tipo de mascota</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft:0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginLeft: 10,
  },
  card: {
    width: width * 0.29,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.borderLines,
    marginHorizontal: 7,
    marginRight: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    
  },
  image: {
    width: '60%',
    height: '40%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  categoryName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    marginTop: 5,
  },
});
