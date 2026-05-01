import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureGrid } from "./FeatureGrid";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import featureGridSource from "./FeatureGrid.tsx?raw";

const meta = {
  title: "Editorial/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A responsive feature grid for showcasing headline features or service capabilities.",
        usage: `
\`\`\`tsx
import { FeatureGrid } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function FeatureGridExample() {
  return (
    <FeatureGrid
      heading="Global private aviation"
      columns={2}
      items={[
        {
          title: "Direct Access to Private Travel",
          body: "Global operations ensure seamless, personalized travel experiences from the first call to landing.",
        },
        {
          title: "Your Freedom to Enjoy Life",
          body: "Every itinerary is shaped around your time, comfort, privacy, and schedule.",
        },
      ]}
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: featureGridSource,
        },
        composition: `
Use \`FeatureGrid\` with:

- \`heading\` for the section title.
- \`columns\` to control the responsive column count.
- \`items\` array for each feature card.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`heading\` | \`string\` | Section title text. |
| \`columns\` | \`number\` | Number of columns in the grid. |
| \`items\` | \`{ title: string; body: string; }[]\` | Feature card content. |
`,
      }),
    },
  },
  args: {
    heading: "Global private aviation",
    columns: 2,
    items: [
      {
        title: "Direct Access to Private Travel",
        body: "Global operations ensure seamless, personalized travel experiences from the first call to landing.",
      },
      {
        title: "Your Freedom to Enjoy Life",
        body: "Every itinerary is shaped around your time, comfort, privacy, and schedule.",
      },
      {
        title: "Precision and Excellence",
        body: "Crew, fleet, and service details meet global standards across every mission.",
      },
      {
        title: "Global Reach, Personal Touch",
        body: "Access destinations across the world while specialists manage every flight detail.",
      },
    ],
  },
} satisfies Meta<typeof FeatureGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
