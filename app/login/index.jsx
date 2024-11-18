import { View, Text, Image, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import * as WebBrowser from 'expo-web-browser'
import Colors from './../../constants/Colors'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the browser
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google'})

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, singUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('../(tabs)/home', { scheme: 'myapp'}),
    })

    if (createdSessionId) {
      
    } else {
      // The user closed the browser without signing in
    }
  } catch (error) {
    console.error('OAuth error', err)
  }
}, [])



  return (
    <View style = {{
      backgroundColor: Colors.background,
      height: '100%',
    }}>
      <Image source={require('./../../assets/images/LogoSolo.png')}
        style={{
          width : '100%',
          height : 500,
        }}
      />
      <View style = {{
        padding: 20,
        display: 'flex',
        alignItems:'center',
      }}>
        <Text style = {{
          fontFamily: 'Montserrat-Bold',
          fontSize: 20,
          textAlign: 'center',
        }}>¡Bienvenido a Vet Expert! </Text>
        <Text style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: 18 ,
          textAlign: 'center',
          color: Colors.text
        }}>Únete a nosotros para brindar a tus mascotas el cuidado que merecen.</Text>

        <Pressable
          onPress={onPress}
          style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.primary,
            width: '100%',
            borderRadius:14
            
          }}>
          <Text style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
            textAlign: 'center',
          }}> Empezar </Text>
        </Pressable>
      </View>
    </View>
  )
}