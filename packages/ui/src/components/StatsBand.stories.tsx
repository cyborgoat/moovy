import type { Meta, StoryObj } from "@storybook/react-vite";
import { LiveTime, StatsBand } from "./StatsBand";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import statsBandSource from "./StatsBand.tsx?raw";

const meta = {
  title: "Data/StatsBand",
  component: StatsBand,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A lightweight band of stats presented in a balanced one-line panel.",
        usage: `
\`\`\`tsx
import { StatsBand } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function StatsBandExample() {
  return (
    <StatsBand
      stats={[
        { label: "Countries supported", value: "174" },
        { label: "Based in", value: "Dubai, UAE" },
        { label: "Local time", value: "Live UTC +04:00" },
      ]}
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: statsBandSource,
        },
        composition: `
Use \`StatsBand\` with:

- \`stats\` array for each metric.
- Optional child nodes for custom stat values.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`stats\` | \`{ label: ReactNode; value: ReactNode; }[]\` | Data points to render in the band. |
`,
      }),
    },
  },
  decorators: [
    (Story) => (
      <div className="moovy-story-frame moovy-story-frame--compact moovy-story-frame--center moovy-story-frame--paper">
        <Story />
      </div>
    ),
  ],
  args: {
    stats: [
      { label: "Countries supported", value: "174" },
      { label: "Based in", value: "Dubai, UAE" },
      { label: "Local time", value: <LiveTime /> },
    ],
  },
} satisfies Meta<typeof StatsBand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
