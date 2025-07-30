import { DefaultTheme, type Theme } from "@react-navigation/native"

export const DARK_THEME: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: "hsl(220, 90%, 56%)",
    background: "hsl(220, 90%, 10%)",
    border: "hsl(220, 90%, 20%)",
    card: "hsl(220, 90%, 15%)",
    text: "hsl(0, 0%, 100%)",
    notification: "hsl(220, 90%, 10%)",
  },
}

export const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: "hsl(220, 90%, 56%)",
    background: "hsl(0, 0%, 20%)",
    border: "hsl(0, 0%, 10%)",
    card: "hsl(0, 0%, 100%)",
    text: "hsl(220, 90%, 98%)",
    notification: "hsl(0, 0%, 20%)",
  },
}
