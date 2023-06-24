import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
