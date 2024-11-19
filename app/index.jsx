import { Link, Redirect,  } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";

export default function Index() {
  return(
  <View>
      <Link href = {'/(tabs)/home'}>Inicio</Link>

    </View>
  );
}
