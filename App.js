import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import RidesScreen from "./screens/RidesScreen";
import MembersScreen from "./screens/RadioScreen";
import RulesScreen from "./screens/GarageScreen";
import GalleryScreen from "./screens/GalleryScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          tabBarStyle: { backgroundColor: "#111" },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Rides" component={RidesScreen} />
        <Tab.Screen name="Members" component={MembersScreen} />
        <Tab.Screen name="Rules" component={RulesScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
