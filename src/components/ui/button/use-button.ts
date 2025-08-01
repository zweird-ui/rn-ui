import { type ReactNode, useCallback } from "react"
import type { PressableProps, TextProps } from "react-native"

import type { LoaderProps } from "@/components/ui/loader/loader"

import { type ButtonVariants, buttonVariants } from "./variants"

export type UseButtonProps = {
  isLoading?: boolean
  children: ReactNode
} & ButtonVariants &
  Omit<PressableProps, "children" | "disabled" | "aria-disabled">

export const useButton = ({
  color,
  variant,
  size,
  isDisabled,
  isLoading,
  className,
  children,
  ...props
}: UseButtonProps) => {
  const slots = buttonVariants({
    color,
    variant,
    size,
    isDisabled: isLoading ?? isDisabled,
    className,
  })

  const getButtonProps = useCallback<() => PressableProps>(
    () => ({
      className: slots.base(),
      disabled: isDisabled ?? isLoading,
      "aria-disabled": isDisabled ?? isLoading,
      ...props,
    }),
    [isDisabled, isLoading, props, slots],
  )

  const getLoaderProps = useCallback<() => LoaderProps>(
    () => ({
      className: slots.loader(),
      color,
      isForeground: true,
    }),
    [slots, color],
  )

  const getTextProps = useCallback<() => TextProps>(
    () => ({
      className: slots.text(),
      children,
    }),
    [children, slots],
  )

  return { getButtonProps, getLoaderProps, getTextProps, isLoading }
}
