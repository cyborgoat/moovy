import { Controls, Primary, Stories, Title } from "@storybook/addon-docs/blocks";
import { DocsMarkdownViewer } from "./DocsMarkdownViewer";

type ManualDocsPageConfig = {
  overview?: string;
  usage: string;
  installation?: {
    dependency?: string;
    source?: string;
  };
  source?: string;
  composition?: string;
  examples?: string;
  api?: string;
};

const codeContent = (source?: string) => `\`\`\`tsx\n${source || ""}\n\`\`\``;

export const createManualDocsPage = (config: ManualDocsPageConfig) => () => (
  <main className="shadcn-docs">
    <section className="shadcn-docs__hero">
      <Title />
      <DocsMarkdownViewer content={config.overview || ""} />
    </section>
    <section className="shadcn-docs__panel shadcn-docs__canvas">
      <Primary />
    </section>
    <section className="shadcn-docs__section">
      <h2 className="shadcn-docs__section-title">Manual</h2>
      <DocsMarkdownViewer
        content={`
1. Install the following dependencies.
2. Copy and paste the component source into your project.
3. Update the import paths to match your project setup.
`}
      />
      <DocsMarkdownViewer content={`\`\`\`bash\n${config.installation?.dependency || "npm install @moovy/ui"}\n\`\`\``} />
      {config.installation?.source ? (
        <DocsMarkdownViewer
          content={`\`\`\`tsx\n${config.installation.source}\n\`\`\``}
          copyText={config.installation.source}
        />
      ) : null}
    </section>
    <section className="shadcn-docs__section">
      <h2 className="shadcn-docs__section-title">Usage</h2>
      <DocsMarkdownViewer content={config.usage} />
    </section>
    {config.composition ? (
      <section className="shadcn-docs__section">
        <h2 className="shadcn-docs__section-title">Composition</h2>
        <DocsMarkdownViewer content={config.composition} />
      </section>
    ) : null}
    {config.examples ? (
      <section className="shadcn-docs__section">
        <h2 className="shadcn-docs__section-title">Examples</h2>
        <DocsMarkdownViewer content={config.examples} />
      </section>
    ) : null}
    {config.api ? (
      <section className="shadcn-docs__section">
        <h2 className="shadcn-docs__section-title">API Reference</h2>
        <DocsMarkdownViewer content={config.api} />
      </section>
    ) : null}
    <section className="shadcn-docs__panel">
      <h2 className="shadcn-docs__section-title">Controls</h2>
      <Controls />
    </section>
    <section className="shadcn-docs__stories">
      <Stories includePrimary={false} />
    </section>
    <section className="shadcn-docs__source">
      <h2 className="shadcn-docs__section-title">Code</h2>
      {config.source || config.installation?.source ? (
        <DocsMarkdownViewer
          content={codeContent(config.source || config.installation?.source)}
          copyText={config.source || config.installation?.source}
        />
      ) : null}
    </section>
  </main>
);
