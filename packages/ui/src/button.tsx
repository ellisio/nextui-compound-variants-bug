import { Button as NextUIButton } from "@nextui-org/react";
import { extendVariants } from "@nextui-org/system-rsc";

export const Button = extendVariants(NextUIButton, {
  variants: {
    fill: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: "text-black",
    },
    {
      variant: "solid",
      color: "primary",
      class: "text-white",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "text-white",
    },
    {
      variant: "solid",
      color: "danger",
      class: "text-white p-20",
    },
    {
      variant: "solid",
      color: "warning",
      class: "text-black",
    },
    {
      variant: "solid",
      color: "success",
      class: "text-white",
    },
  ],
});
