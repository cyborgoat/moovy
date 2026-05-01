import type { Preview } from "@storybook/react-vite";
import { Controls, Description, Primary, Source, Stories, Title } from "@storybook/addon-docs/blocks";
import { DocsMarkdownViewer } from "./DocsMarkdownViewer";
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
        <main className="shadcn-docs">
          <section className="shadcn-docs__hero">
            <Title />
            <Description />
          </section>
          <section className="shadcn-docs__panel shadcn-docs__canvas">
            <Primary />
          </section>
          <section className="shadcn-docs__section">
            <h2 className="shadcn-docs__section-title">Usage</h2>
            <DocsMarkdownViewer>
              <Description />
            </DocsMarkdownViewer>
          </section>
          <section className="shadcn-docs__panel">
            <h2 className="shadcn-docs__section-title">Controls</h2>
            <Controls />
          </section>
          <section className="shadcn-docs__stories">
            <Stories includePrimary={false} />
          </section>
          <section className="shadcn-docs__source">
            <h2 className="shadcn-docs__section-title">Code</h2>
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
