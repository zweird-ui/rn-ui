import React from "react"
import { ScrollView, Text, View } from "react-native"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const CardShowcase = () => (
  <ScrollView className="flex-1 bg-background">
    <View className="flex flex-1 flex-col gap-4 p-6">
      <Text className="mb-4 text-2xl font-bold">Card Showcase</Text>

      {/* Basic Card */}
      <Card className=" ">
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>
            This is a basic card with default radius and shadow.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text>
            This is the card content area where you can put any content you
            want.
          </Text>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>

      {/* Card with different radius */}
      <Card radius="xl">
        <CardHeader>
          <CardTitle>Large Radius Card</CardTitle>
          <CardDescription>
            This card has a larger border radius.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Content with xl radius styling.</Text>
        </CardContent>
      </Card>

      {/* Card with different shadow */}
      <Card shadow="lg">
        <CardHeader>
          <CardTitle>Large Shadow Card</CardTitle>
          <CardDescription>
            This card has a larger shadow effect.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Content with large shadow.</Text>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Secondary Action
          </Button>
          <Button size="sm">Primary Action</Button>
        </CardFooter>
      </Card>

      {/* Card with no shadow and sharp corners */}
      <Card radius="none" shadow="none">
        <CardHeader>
          <CardTitle>Sharp Card</CardTitle>
          <CardDescription>
            No radius and no shadow for a sharp, clean look.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Minimal styling approach.</Text>
        </CardContent>
      </Card>
    </View>
  </ScrollView>
)
