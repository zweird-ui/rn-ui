import "@@/global.css"
import { ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useColorScheme } from "nativewind"
import { useEffect } from "react"
import "react-native-reanimated"

import { DARK_THEME, LIGHT_THEME } from "@/constants/colors"

// eslint-disable-next-line no-duplicate-imports
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

void SplashScreen.preventAutoHideAsync()

const RootLayoutNav = () => {
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    void SplashScreen.hideAsync()
  }, [])

  return (
    <ThemeProvider value={colorScheme === "dark" ? DARK_THEME : LIGHT_THEME}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  )
}

export default RootLayoutNav
