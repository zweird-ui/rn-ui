import React from "react"
import { ScrollView, Text, View } from "react-native"

import { Loader } from "@/components/ui/loader"

const SizesSection = () => (
  <View className="space-y-4">
    <Text className="text-lg font-semibold text-foreground">Sizes</Text>
    <View className="flex-row items-center gap-12">
      <View className="items-center space-y-2">
        <Loader size="sm" />
        <Text className="text-xs text-muted-foreground">SM</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader size="md" />
        <Text className="text-xs text-muted-foreground">MD</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader size="lg" />
        <Text className="text-xs text-muted-foreground">LG</Text>
      </View>
    </View>
  </View>
)

const ColorsSection = () => (
  <View className="space-y-4">
    <Text className="text-lg font-semibold text-foreground">Colors</Text>
    <View className="flex-row items-center gap-12">
      <View className="items-center space-y-2">
        <Loader color="primary" size="lg" />
        <Text className="text-xs text-muted-foreground">Primary</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader color="secondary" size="lg" />
        <Text className="text-xs text-muted-foreground">Secondary</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader color="danger" size="lg" />
        <Text className="text-xs text-muted-foreground">Danger</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader color="warning" size="lg" />
        <Text className="text-xs text-muted-foreground">Warning</Text>
      </View>
      <View className="items-center space-y-2">
        <Loader color="success" size="lg" />
        <Text className="text-xs text-muted-foreground">Success</Text>
      </View>
    </View>
  </View>
)

export const LoaderShowcase = () => (
  <ScrollView className="flex-1 bg-background">
    <View className="flex-1 space-y-8 p-6">
      <Text className="mb-4 text-2xl font-bold text-foreground">
        Loader Components
      </Text>
      <SizesSection />
      <ColorsSection />
    </View>
  </ScrollView>
)
