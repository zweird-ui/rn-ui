import React from "react"
import { View } from "react-native"
import Animated from "react-native-reanimated"

import {
  type UseLoaderProps,
  useLoader,
} from "@/components/ui/loader/use-loader"

export type LoaderProps = UseLoaderProps

export const Loader = (props: LoaderProps) => {
  const { getWrapperProps, getCircle1Props, getCircle2Props } = useLoader(props)

  return (
    <View {...getWrapperProps()}>
      <Animated.View {...getCircle1Props()} />
      <Animated.View {...getCircle2Props()} />
    </View>
  )
}
