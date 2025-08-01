import { type VariantProps, tv } from "tailwind-variants"

export const loaderVariants = tv({
  slots: {
    wrapper: "",
    circle1: "animate-loader-linear-spin",
    circle2: "animate-loader-ease-spin opacity-60",
  },
  variants: {
    color: {
      primary: "",
      secondary: "",
      danger: "",
      warning: "",
      success: "",
    },
    isForeground: {
      true: "",
      false: "",
    },
    size: {
      sm: {
        wrapper: "w-4 h-4",
      },
      md: {
        wrapper: "w-6 h-6",
      },
      lg: {
        wrapper: "w-10 h-10",
      },
    },
  },
  compoundSlots: [
    {
      slots: ["circle1", "circle2"],
      class:
        "absolute w-full h-full rounded-full border-t-transparent border-l-transparent border-r-transparent border-solid",
    },
    {
      slots: ["circle1", "circle2"],
      size: ["sm", "md"],
      class: "border-2",
    },
    {
      slots: ["circle1", "circle2"],
      size: "lg",
      class: "border-[2.5px]",
    },
    {
      slots: ["circle1", "circle2"],
      color: "primary",
      isForeground: true,
      class: "border-b-primary-foreground",
    },
    {
      slots: ["circle1", "circle2"],
      color: "primary",
      isForeground: false,
      class: "border-b-primary",
    },
    {
      slots: ["circle1", "circle2"],
      color: "secondary",
      isForeground: true,
      class: "border-b-secondary-foreground",
    },
    {
      slots: ["circle1", "circle2"],
      color: "secondary",
      isForeground: false,
      class: "border-b-secondary",
    },
    {
      slots: ["circle1", "circle2"],
      color: "danger",
      isForeground: true,
      class: "border-b-danger-foreground",
    },
    {
      slots: ["circle1", "circle2"],
      color: "danger",
      isForeground: false,
      class: "border-b-danger",
    },
    {
      slots: ["circle1", "circle2"],
      color: "warning",
      isForeground: true,
      class: "border-b-warning-foreground",
    },
    {
      slots: ["circle1", "circle2"],
      color: "warning",
      isForeground: false,
      class: "border-b-warning",
    },
    {
      slots: ["circle1", "circle2"],
      color: "success",
      isForeground: true,
      class: "border-b-success-foreground",
    },
    {
      slots: ["circle1", "circle2"],
      color: "success",
      isForeground: false,
      class: "border-b-success",
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    isForeground: false,
  },
})

export type LoaderVariants = VariantProps<typeof loaderVariants>
