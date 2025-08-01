import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"
import { useColorScheme } from "nativewind"
import React from "react"

const DARK_TINT_COLOR = "#fff"
const LIGHT_TINT_COLOR = "#000"

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  const { colorScheme = "light" } = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          colorScheme === "dark" ? DARK_TINT_COLOR : LIGHT_TINT_COLOR,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Buttons",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="loader"
        options={{
          title: "Loaders",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="spinner" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="card"
        options={{
          title: "Cards",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="credit-card" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
