import { create } from "storybook/theming/create";

export const moovyTheme = create({
  base: "light",
  brandTitle: "Moovy UI",
  brandUrl: "https://jeskojets.com",
  brandTarget: "_blank",

  appBg: "#fbfaf7",
  appContentBg: "#fffefd",
  appPreviewBg: "#fffdf9",
  appBorderColor: "rgba(112, 97, 76, 0.1)",
  appBorderRadius: 8,

  barBg: "#f8f5ef",
  barTextColor: "#7d7467",
  barSelectedColor: "#4e463b",

  colorPrimary: "#9b7a48",
  colorSecondary: "#b8915b",

  textColor: "#4e463b",
  textInverseColor: "#ffffff",
  textMutedColor: "#9a9389",

  inputBg: "#ffffff",
  inputBorder: "rgba(112, 97, 76, 0.12)",
  inputTextColor: "#4e463b",
  inputBorderRadius: 8,

  fontBase:
    '"Aptos", "SF Pro Display", "Segoe UI Variable", "Segoe UI", ui-sans-serif, system-ui, sans-serif',
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
});
