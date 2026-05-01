import { addons } from "storybook/manager-api";
import { moovyTheme } from "./moovyTheme";

addons.setConfig({
  theme: moovyTheme,
  panelPosition: "right",
  sidebar: {
    showRoots: true,
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
  },
});
