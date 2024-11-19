import { View, Text, Image } from 'react-native'
import React from 'react'


export default function Header() {
    

  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
    }}>
        <View>
            <Text style = {{
                fontFamily: 'Montserrat-Regular',
                fontSize: 18,
            }}>¡Bienvenido, </Text>
            <Text style = {{
                fontFamily: 'Montserrat-Bold',
                fontSize: 25,
            }}> !</Text>
        </View>
        <Image source = {{}} 
        style = {{
            width: 50,
            height: 50,
            borderRadius: 99,
        }}/>
    </View>
  )
}