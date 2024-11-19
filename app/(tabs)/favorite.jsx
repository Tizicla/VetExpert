import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FavoriteItem from '../../components/Favorites/FavoriteItem'; // Componente para mostrar cada favorito
import EmptyFavorites from '../../components/Favorites/EmptyFavorites'; // Componente para mostrar un estado vacío
import Colors from '../../constants/Colors'

export default function FavoritesScreen() {
  const favorites = []; // Lista de favoritos, reemplázala con datos de tu estado o fuente de datos

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <FavoriteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <EmptyFavorites />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },
});
