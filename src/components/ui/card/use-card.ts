import { type RefObject, createContext, useCallback, useContext } from "react"
import type { Text, TextProps, View, ViewProps } from "react-native"

import { type CardVariants, cardVariants } from "./variants"

type CommonProps = {
  ref?: RefObject<View>
} & ViewProps

type CommonTextProps = {
  ref?: RefObject<Text>
} & TextProps

export type UseCardProps = CommonProps & CardVariants

export type CardContextType = {
  slots: ReturnType<typeof cardVariants>
}

export const CardContext = createContext<CardContextType | null>(null)

export const useCardContext = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error("Card components must be used within a Card component")
  }

  return context
}

export const useCard = ({
  radius,
  shadow,
  className,
  ...props
}: UseCardProps) => {
  const slots = cardVariants({
    radius,
    shadow,
  })

  const getCardProps = useCallback<() => CommonProps>(
    () => ({
      className: slots.base({ className }),
      ...props,
    }),
    [slots, className, props],
  )

  return {
    getCardProps,
    slots,
  }
}

export type UseCardHeaderProps = CommonProps

export const useCardHeader = ({ className, ...props }: UseCardHeaderProps) => {
  const { slots } = useCardContext()

  const getHeaderProps = useCallback<() => CommonProps>(
    () => ({
      className: slots.header({ className }),
      ...props,
    }),
    [slots, className, props],
  )

  return { getHeaderProps }
}

export type UseCardTitleProps = CommonTextProps

export const useCardTitle = ({ className, ...props }: UseCardTitleProps) => {
  const { slots } = useCardContext()

  const getTitleProps = useCallback<() => CommonTextProps>(
    () => ({
      className: slots.title({ className }),
      ...props,
    }),
    [slots, className, props],
  )

  return { getTitleProps }
}

export type UseCardDescriptionProps = CommonTextProps

export const useCardDescription = ({
  className,
  ...props
}: UseCardDescriptionProps) => {
  const { slots } = useCardContext()

  const getDescriptionProps = useCallback<() => CommonTextProps>(
    () => ({
      className: slots.description({ className }),
      ...props,
    }),
    [className, slots, props],
  )

  return { getDescriptionProps }
}

export type UseCardContentProps = CommonProps

export const useCardContent = ({
  className,
  ...props
}: UseCardContentProps) => {
  const { slots } = useCardContext()

  const getContentProps = useCallback<() => CommonProps>(
    () => ({
      className: slots.content({ className }),
      ...props,
    }),
    [className, slots, props],
  )

  return { getContentProps }
}

export type UseCardFooterProps = CommonProps

export const useCardFooter = ({ className, ...props }: UseCardFooterProps) => {
  const { slots } = useCardContext()

  const getFooterProps = useCallback<() => CommonProps>(
    () => ({
      className: slots.footer({ className }),
      ...props,
    }),
    [className, slots, props],
  )

  return { getFooterProps }
}
