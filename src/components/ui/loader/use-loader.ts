import { type RefObject, useCallback } from "react"
import type { View, ViewProps } from "react-native"

import {
  type LoaderVariants,
  loaderVariants,
} from "@/components/ui/loader/variants"

type ViewRef = {
  ref?: RefObject<View>
}

export type UseLoaderProps = ViewRef & LoaderVariants & ViewProps

export const useLoader = ({
  color,
  size,
  isForeground,
  className,
  "aria-label": ariaLabel,
  ...props
}: UseLoaderProps) => {
  const slots = loaderVariants({
    color,
    size,
    isForeground,
  })

  const getWrapperProps = useCallback<() => ViewProps & ViewRef>(
    () => ({
      className: slots.wrapper({ className }),
      "aria-label": ariaLabel ?? "Loading",
      ...props,
    }),
    [ariaLabel, className, props, slots],
  )

  const getCircle1Props = useCallback<() => ViewProps>(
    () => ({
      className: slots.circle1(),
    }),
    [slots],
  )

  const getCircle2Props = useCallback<() => ViewProps>(
    () => ({
      className: slots.circle2(),
    }),
    [slots],
  )

  return { getWrapperProps, getCircle1Props, getCircle2Props }
}
