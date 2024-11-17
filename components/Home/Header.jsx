import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';

export default function Header() {
    const { user } = useUser();

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
            }}> {user?.fullName}!</Text>
        </View>
        <Image source = {{uri: user?.imageUrl}} 
        style = {{
            width: 50,
            height: 50,
            borderRadius: 99,
        }}/>
    </View>
  )
}