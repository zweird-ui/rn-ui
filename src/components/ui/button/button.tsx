import React from "react"
import { Pressable, Text } from "react-native"

import {
  type UseButtonProps,
  useButton,
} from "@/components/ui/button/use-button"
import { Loader } from "@/components/ui/loader"

export type ButtonProps = UseButtonProps

export const Button = (props: ButtonProps) => {
  const { getButtonProps, getLoaderProps, getTextProps, isLoading } =
    useButton(props)

  return (
    <Pressable {...getButtonProps()}>
      {isLoading && <Loader {...getLoaderProps()} />}
      <Text {...getTextProps()} />
    </Pressable>
  )
}
