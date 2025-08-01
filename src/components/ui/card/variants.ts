import { tv } from "tailwind-variants"

export const cardVariants = tv({
  slots: {
    base: ["bg-card border border-card-foreground/10", "overflow-hidden"],
    header: ["flex flex-col gap-1.5 p-6"],
    title: [
      "text-2xl font-semibold leading-none tracking-tight text-card-foreground",
    ],
    description: ["text-sm text-muted-foreground"],
    content: ["p-6 pt-0"],
    footer: ["flex flex-row justify-between p-6 pt-0"],
  },
  variants: {
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
      },
      md: {
        base: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
      },
      xl: {
        base: "rounded-xl",
      },
      "2xl": {
        base: "rounded-2xl",
      },
    },
    shadow: {
      none: {
        base: "shadow-none",
      },
      sm: {
        base: "shadow-sm",
      },
      md: {
        base: "shadow-md",
      },
      lg: {
        base: "shadow-lg",
      },
      xl: {
        base: "shadow-xl",
      },
      "2xl": {
        base: "shadow-2xl",
      },
    },
  },
  defaultVariants: {
    radius: "lg",
    shadow: "sm",
  },
})

export type CardVariants = Parameters<typeof cardVariants>[0]
