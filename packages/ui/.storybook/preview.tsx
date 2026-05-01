import type { Preview } from "@storybook/react-vite";
import {
  Controls,
  Description,
  Source,
  Primary,
  Title,
} from "@storybook/addon-docs/blocks";
import { moovyTheme } from "./moovyTheme";
import "../src/styles.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "Transparent",
      values: [
        { name: "Transparent", value: "transparent" },
        { name: "Moovy Paper", value: "#f4f1eb" },
        { name: "Hangar", value: "#11110f" },
        { name: "Cabin", value: "#d8d0c2" },
      ],
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: moovyTheme,
      page: () => (
        <main className="moovy-docs">
          <section className="moovy-docs__masthead">
            <Title />
            <Description />
          </section>
          <section className="moovy-docs__preview">
            <Primary />
          </section>
          <section className="moovy-docs__panel">
            <h2>API</h2>
            <Controls />
          </section>
          <section className="moovy-docs__panel">
            <h2>Code</h2>
            <Source />
          </section>
        </main>
      ),
    },
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Editorial", "Motion", "Product", "Data"],
      },
    },
  },
};

export default preview;
