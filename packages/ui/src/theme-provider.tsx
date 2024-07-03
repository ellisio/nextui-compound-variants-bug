import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";

export const ThemeProvider = (props: NextUIProviderProps) => {
  const { children, ...other } = props;

  return <NextUIProvider {...other}>{children}</NextUIProvider>;
};
