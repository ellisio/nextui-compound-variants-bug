"use client";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "data-[pressed=true]:scale-[0.97]",
  ],
  variants: {
    variant: {
      solid: "",
    },
    size: {
      sm: "h-8 min-w-16 gap-2 rounded-small px-3 text-tiny",
      md: "h-10 min-w-20 gap-2 rounded-medium px-4 text-small",
      lg: "h-12 min-w-24 gap-3 rounded-large px-6 text-medium",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full",
    },
    fullWidth: {
      true: "w-full",
    },
    isDisabled: {
      true: "pointer-events-none opacity-disabled",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "primary",
    fullWidth: false,
    isDisabled: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: "bg-default text-black",
    },
    {
      variant: "solid",
      color: "primary",
      class: "bg-primary text-white",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "bg-secondary text-white",
    },
    {
      variant: "solid",
      color: "success",
      class: "bg-success text-white",
    },
    {
      variant: "solid",
      color: "warning",
      class: "bg-warning text-black",
    },
    {
      variant: "solid",
      color: "danger",
      class: "bg-danger text-white",
    },
  ],
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends React.PropsWithChildren<ButtonVariants> {
  // ...
}

export const AppButton = (props: ButtonProps) => {
  return <button className={button(props)}>{props.children}</button>;
};
