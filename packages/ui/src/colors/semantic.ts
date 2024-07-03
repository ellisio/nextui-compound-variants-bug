import { SemanticBaseColors, ThemeColors } from "@nextui-org/react";
import { readableColor } from "color2k";

import { background } from "./background";
import { commonColors as common, darkCommonColors as darkCommon } from "./common";

const base: SemanticBaseColors = {
  light: {
    background: {
      ...background.light,
      DEFAULT: background.light[100],
    },
    foreground: {
      ...common.gray,
      DEFAULT: common.gray[900],
    },
    divider: {
      DEFAULT: "rgba(17, 17, 17, 0.15)",
    },
    focus: {
      DEFAULT: common.blue[600],
    },
    overlay: {
      DEFAULT: common.black,
    },
    content1: {
      DEFAULT: background.light[50],
      foreground: common.gray[900],
    },
    content2: {
      DEFAULT: background.light[50],
      foreground: common.gray[900],
    },
    content3: {
      DEFAULT: background.light[50],
      foreground: common.gray[900],
    },
    content4: {
      DEFAULT: background.light[50],
      foreground: common.gray[900],
    },
  },
  dark: {
    background: {
      ...background.dark,
      DEFAULT: background.dark[100],
    },
    foreground: {
      ...darkCommon.gray,
      DEFAULT: darkCommon.gray[900],
    },
    divider: {
      DEFAULT: "rgba(17, 17, 17, 0.15)",
    },
    focus: {
      DEFAULT: darkCommon.blue[600],
    },
    overlay: {
      DEFAULT: darkCommon.black,
    },
    content1: {
      DEFAULT: background.dark[50],
      foreground: darkCommon.gray[900],
    },
    content2: {
      DEFAULT: background.dark[50],
      foreground: darkCommon.gray[900],
    },
    content3: {
      DEFAULT: background.dark[50],
      foreground: darkCommon.gray[900],
    },
    content4: {
      DEFAULT: background.dark[50],
      foreground: darkCommon.gray[900],
    },
  },
};

export const themeColorsLight: ThemeColors = {
  ...base.light,
  default: {
    ...common.gray,
    foreground: readableColor(common.gray[600]),
    DEFAULT: common.gray[600],
  },
  primary: {
    ...common.blue,
    foreground: readableColor(common.blue[600]),
    DEFAULT: common.blue[600],
  },
  secondary: {
    ...common.purple,
    foreground: readableColor(common.purple[600]),
    DEFAULT: common.purple[600],
  },
  success: {
    ...common.green,
    foreground: readableColor(common.green[600]),
    DEFAULT: common.green[600],
  },
  warning: {
    ...common.amber,
    foreground: readableColor(common.amber[600]),
    DEFAULT: common.amber[600],
  },
  danger: {
    ...common.red,
    foreground: readableColor(common.red[600]),
    DEFAULT: common.red[600],
  },
};

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  default: {
    ...darkCommon.gray,
    foreground: readableColor(darkCommon.gray[600]),
    DEFAULT: darkCommon.gray[600],
  },
  primary: {
    ...darkCommon.blue,
    foreground: readableColor(darkCommon.blue[600]),
    DEFAULT: darkCommon.blue[600],
  },
  secondary: {
    ...darkCommon.purple,
    foreground: readableColor(darkCommon.purple[600]),
    DEFAULT: darkCommon.purple[600],
  },
  success: {
    ...darkCommon.green,
    foreground: readableColor(darkCommon.green[600]),
    DEFAULT: darkCommon.green[600],
  },
  warning: {
    ...darkCommon.amber,
    foreground: readableColor(darkCommon.amber[600]),
    DEFAULT: darkCommon.amber[600],
  },
  danger: {
    ...darkCommon.red,
    foreground: readableColor(darkCommon.red[600]),
    DEFAULT: darkCommon.red[600],
  },
};

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};
