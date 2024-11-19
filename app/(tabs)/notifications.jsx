import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import MessageHeader from '../../components/Notifications/HeaderNotifications';
import MessageItem from '../../components/Notifications/ItemNotifications';


export default function Notifications() {
  const messages = [
    {
      id: '1',
      name: 'Alejandra Dorantes Cortés',
      date: '11 jul 2022',
      message: 'Hola, aquí tienes los detalles de tu v...',
      image: require('./../../assets/images/veterinario.png')
    },
  ];
  return (
    <View style={styles.container}>
      <MessageHeader />
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
});

