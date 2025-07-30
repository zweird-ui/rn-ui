import { ScrollView, Text, View } from "react-native"

import { Button } from "@/components/ui/button"

const PrimaryButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">Primary Color</Text>
    <View className="flex-row space-x-2">
      <Button color="primary" variant="fill" size="sm">
        Small Fill
      </Button>
      <Button color="primary" variant="outline" size="sm">
        Small Outline
      </Button>
    </View>
    <View className="flex-row space-x-2">
      <Button color="primary" variant="fill" size="md">
        Medium Fill
      </Button>
      <Button color="primary" variant="outline" size="md">
        Medium Outline
      </Button>
    </View>
    <View className="flex-row space-x-2">
      <Button color="primary" variant="fill" size="lg">
        Large Fill
      </Button>
      <Button color="primary" variant="outline" size="lg">
        Large Outline
      </Button>
    </View>
  </View>
)

const SecondaryButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">
      Secondary Color
    </Text>
    <View className="flex-row space-x-2">
      <Button color="secondary" variant="fill" size="md">
        Secondary Fill
      </Button>
      <Button color="secondary" variant="outline" size="md">
        Secondary Outline
      </Button>
    </View>
  </View>
)

const DangerButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">Danger Color</Text>
    <View className="flex-row space-x-2">
      <Button color="danger" variant="fill" size="md">
        Danger Fill
      </Button>
      <Button color="danger" variant="outline" size="md">
        Danger Outline
      </Button>
    </View>
  </View>
)

const WarningButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">Warning Color</Text>
    <View className="flex-row space-x-2">
      <Button color="warning" variant="fill" size="md">
        Warning Fill
      </Button>
      <Button color="warning" variant="outline" size="md">
        Warning Outline
      </Button>
    </View>
  </View>
)

const DisabledButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">
      Disabled State
    </Text>
    <View className="flex-row space-x-2">
      <Button color="primary" variant="fill" size="md" isDisabled>
        Disabled Fill
      </Button>
      <Button color="primary" variant="outline" size="md" isDisabled>
        Disabled Outline
      </Button>
    </View>
  </View>
)

const LoadingButtons = () => (
  <View className="w-full space-y-4">
    <Text className="text-lg font-semibold text-foreground">Loading State</Text>
    <View className="flex-row space-x-2">
      <Button color="primary" variant="fill" size="sm" isLoading>
        Loading Small
      </Button>
      <Button color="secondary" variant="fill" size="md" isLoading>
        Loading Medium
      </Button>
      <Button color="danger" variant="outline" size="lg" isLoading>
        Loading Large
      </Button>
    </View>
  </View>
)

export const ButtonShowcase = () => (
  <ScrollView className="flex-1 bg-background">
    <View className="flex-1 items-center justify-center space-y-4 p-6">
      <Text className="mb-8 text-2xl font-bold text-foreground">
        Button Components
      </Text>

      <PrimaryButtons />
      <SecondaryButtons />
      <DangerButtons />
      <WarningButtons />
      <DisabledButtons />
      <LoadingButtons />
    </View>
  </ScrollView>
)
