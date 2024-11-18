import { useUser } from '@clerk/clerk-expo';
import { Link, Redirect, useRootNavigationState } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";

export default function Index() {

  const { user } = useUser();

  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    CheckNavLoaded();
  }, []);

  const CheckNavLoaded = () => {
    if(!rootNavigationState.key)
      return null;
  }

  return user&&(
    <View
      style={{
        flex: 1,
      }}
    >
      <Text> {user?.fullName} </Text>
      {user? 
        <Redirect href = {'/(tabs)/home'} />
        :<Redirect href = {'/login/index'} />}
    </View>
  );
}
