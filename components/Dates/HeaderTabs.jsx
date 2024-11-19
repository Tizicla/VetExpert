import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Programadas');

  return (
    

        
    <View style={styles.container}>
      {['Programadas', 'Realizadas', 'Canceladas'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab ? styles.activeTab : null,
          ]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={activeTab === tab ? styles.activeText : styles.text}>
            {tab} (0)
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderColor: Colors.borderLines,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 5,


  },
  activeTab: {
    backgroundColor: '#d0e8fc',
  },
  text: {
    color: '#7a7a7a',
  },
  activeText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default HeaderTabs;
