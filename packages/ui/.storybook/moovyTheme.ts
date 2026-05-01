import { create } from "storybook/theming/create";

export const moovyTheme = create({
  base: "light",
  brandTitle: "Moovy UI",
  brandUrl: "https://github.com",
  brandTarget: "_blank",

  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "rgba(15, 23, 42, 0.14)",
  appBorderRadius: 8,

  barBg: "#f8fafc",
  barTextColor: "#475569",
  barSelectedColor: "#0f172a",

  colorPrimary: "#0f172a",
  colorSecondary: "#1d4ed8",

  textColor: "#0f172a",
  textInverseColor: "#ffffff",
  textMutedColor: "#64748b",

  inputBg: "#ffffff",
  inputBorder: "rgba(15, 23, 42, 0.14)",
  inputTextColor: "#0f172a",
  inputBorderRadius: 8,

  fontBase:
    '"Inter", "Segoe UI", "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
});
