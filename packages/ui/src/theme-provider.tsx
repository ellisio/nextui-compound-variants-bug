import { NextUIProvider, NextUIProviderProps } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const ThemeProvider = (props: NextUIProviderProps) => {
  const { children, ...other } = props;

  return (
    <NextUIProvider {...other}>
      <NextThemesProvider forcedTheme="light">{children}</NextThemesProvider>
    </NextUIProvider>
  );
};
