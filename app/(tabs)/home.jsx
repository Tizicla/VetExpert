import { View, ScrollView, Text } from 'react-native'
import Colors from '../../constants/Colors'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import PetListByCategory from '../../components/Home/PetListByCategory'
import SearchBar from '../../components/Home/SearchBar'
import SpecialistsSection from '../../components/Home/SpecialistsSection'
import ReviewSection from '../../components/Home/ReviewSection'
export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
    <View style ={{
      padding:20,
      backgroundColor: Colors.background,
    }}
    >
      {/*Header*/}
        <Header/>
        <SearchBar/>
      {/*Slider bonito*/}
       <Slider/>
       
      {/*Tipos de mascota*/}
        <PetListByCategory/>
        <SpecialistsSection/>
        <ReviewSection/>
      {/*Veterinarios Listados*/}
      {/*Nosé*/}
    </View>
    </ScrollView>
  )
}