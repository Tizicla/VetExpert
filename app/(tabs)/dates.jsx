import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderTabs from '../../components/Dates/HeaderTabs';
import DatesCard from '../../components/Dates/DatesCard';


export default function Dates() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas</Text>
      <HeaderTabs />
      <DatesCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },
});

