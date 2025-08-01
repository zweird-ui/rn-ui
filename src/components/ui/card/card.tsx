import React from "react"
import { Text, View } from "react-native"

import {
  CardContext,
  type UseCardContentProps,
  type UseCardDescriptionProps,
  type UseCardFooterProps,
  type UseCardHeaderProps,
  type UseCardProps,
  type UseCardTitleProps,
  useCard,
  useCardContent,
  useCardDescription,
  useCardFooter,
  useCardHeader,
  useCardTitle,
} from "./use-card"

export type CardProps = UseCardProps

export const Card = (props: CardProps) => {
  const { getCardProps, slots } = useCard(props)

  return (
    <CardContext value={{ slots }}>
      <View {...getCardProps()} />
    </CardContext>
  )
}

export type CardHeaderProps = UseCardHeaderProps

export const CardHeader = (props: CardHeaderProps) => {
  const { getHeaderProps } = useCardHeader(props)

  return <View {...getHeaderProps()} />
}

export type CardTitleProps = UseCardTitleProps

export const CardTitle = (props: CardTitleProps) => {
  const { getTitleProps } = useCardTitle(props)

  return <Text {...getTitleProps()} />
}

export type CardDescriptionProps = UseCardDescriptionProps

export const CardDescription = (props: CardDescriptionProps) => {
  const { getDescriptionProps } = useCardDescription(props)

  return <Text {...getDescriptionProps()} />
}

export type CardContentProps = UseCardContentProps

export const CardContent = (props: CardContentProps) => {
  const { getContentProps } = useCardContent(props)

  return <View {...getContentProps()} />
}

export type CardFooterProps = UseCardFooterProps

export const CardFooter = (props: CardFooterProps) => {
  const { getFooterProps } = useCardFooter(props)

  return <View {...getFooterProps()} />
}
