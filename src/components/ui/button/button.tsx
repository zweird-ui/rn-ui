import React from "react"
import { ActivityIndicator, Pressable, Text } from "react-native"

import {
  type UseButtonProps,
  useButton,
} from "@/components/ui/button/use-button"

export type ButtonProps = UseButtonProps

export const Button = (props: ButtonProps) => {
  const { getButtonProps, getLoaderProps, getTextProps, isLoading } =
    useButton(props)

  return (
    <Pressable {...getButtonProps()}>
      {isLoading && <ActivityIndicator {...getLoaderProps()} />}
      <Text {...getTextProps()} />
    </Pressable>
  )
}
