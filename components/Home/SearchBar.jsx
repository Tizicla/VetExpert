import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    console.log('Texto de búsqueda:', text); // Aquí puedes manejar la lógica de búsqueda
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#aaa" style={{ marginRight: 10 }} />
        <TextInput
          style={styles.input}
          placeholder="Buscar veterinario, especie, etc."
          value={searchText}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#faf7ff',
    
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
});
