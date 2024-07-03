import { Button as NextUIButton, extendVariants } from "@nextui-org/react";

export const Button = extendVariants(NextUIButton, {
  variants: {
    fill: {
      true: "w-full",
    },
  },
  defaultVariants: {
    color: "success",
    variant: "solid",
    fill: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      className: "text-black",
    },
    {
      variant: "solid",
      color: "primary",
      className: "text-white",
    },
    {
      variant: "solid",
      color: "secondary",
      className: "text-white",
    },
    {
      variant: "solid",
      color: "danger",
      className: "text-white",
    },
    {
      variant: "solid",
      color: "warning",
      className: "text-black",
    },
    {
      variant: "solid",
      color: "success",
      className: "text-white",
    },
  ],
});
