import { tv } from "tailwind-variants"

export const buttonVariants = tv({
  slots: {
    base: [
      "flex-row items-center justify-center rounded-lg",
      "transition-all duration-200 ease-in-out",
      "active:scale-95",
    ],
    text: ["font-medium"],
    loader: ["mr-2"],
  },
  variants: {
    color: {
      primary: "",
      secondary: "",
      danger: "",
      warning: "",
    },
    variant: {
      fill: "",
      outline: {
        base: "border-2 bg-transparent",
      },
    },
    size: {
      sm: {
        base: "px-3 py-2 min-h-[32px]",
        text: "text-sm",
        loader: "w-4 h-4",
      },
      md: {
        base: "px-4 py-3 min-h-[40px]",
        text: "text-base",
        loader: "w-5 h-5",
      },
      lg: {
        base: "px-6 py-4 min-h-[48px]",
        text: "text-lg",
        loader: "w-6 h-6",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-50 pointer-events-none",
      },
      false: "",
    },
  },
  compoundVariants: [
    // Primary variants
    {
      color: "primary",
      variant: "fill",
      class: {
        base: "bg-primary",
        text: "text-primary-foreground",
        loader: "text-primary-foreground",
      },
    },
    {
      color: "primary",
      variant: "outline",
      class: {
        base: "border-primary",
        text: "text-primary",
        loader: "text-primary",
      },
    },
    // Secondary variants
    {
      color: "secondary",
      variant: "fill",
      class: {
        base: "bg-secondary",
        text: "text-secondary-foreground",
        loader: "text-secondary-foreground",
      },
    },
    {
      color: "secondary",
      variant: "outline",
      class: {
        base: "border-secondary",
        text: "text-secondary",
        loader: "text-secondary",
      },
    },
    // Danger variants
    {
      color: "danger",
      variant: "fill",
      class: {
        base: "bg-danger",
        text: "text-danger-foreground",
        loader: "text-danger-foreground",
      },
    },
    {
      color: "danger",
      variant: "outline",
      class: {
        base: "border-danger",
        text: "text-danger",
        loader: "text-danger",
      },
    },
    // Warning variants
    {
      color: "warning",
      variant: "fill",
      class: {
        base: "bg-warning",
        text: "text-warning-foreground",
        loader: "text-warning-foreground",
      },
    },
    {
      color: "warning",
      variant: "outline",
      class: {
        base: "border-warning",
        text: "text-warning",
        loader: "text-warning",
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "fill",
    size: "md",
    isDisabled: false,
  },
})

export type ButtonVariants = Parameters<typeof buttonVariants>[0]
