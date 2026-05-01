import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerticalTextMarquee } from "./VerticalTextMarquee";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import verticalTextMarqueeSource from "./VerticalTextMarquee.tsx?raw";

const meta = {
  title: "Motion/VerticalTextMarquee",
  component: VerticalTextMarquee,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A vertically scrolling marquee for rotating one-word labels with adjustable speed and direction.",
        usage: `
\`\`\`tsx
import { VerticalTextMarquee } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function VerticalTextMarqueeExample() {
  return (
    <VerticalTextMarquee
      items={[
        "Luxury",
        "Precision",
        "Freedom",
        "Global",
        "Cinema",
        "Private",
        "Altitude",
        "Velocity",
      ]}
      speed={4}
      direction="up"
      pauseOnHover={true}
      size="display"
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: verticalTextMarqueeSource,
        },
        composition: `
Use \`VerticalTextMarquee\` with:

- \`items\` for the scrolling labels.
- \`speed\` for transition timing.
- \`direction\` to control flow.
- \`size\` for text sizing.
- \`pauseOnHover\` for pause behavior on pointer interaction.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`items\` | \`string[]\` | Items to cycle through. |
| \`speed\` | \`number\` | Transition speed in seconds modifier. |
| \`direction\` | \`\"up\" or \"down\"\` | Scroll direction. |
| \`pauseOnHover\` | \`boolean\` | Whether to pause when hovered. |
| \`size\` | \`\"sm\", \"md\", or \"display\"\` | Typography scale. |
`,
      }),
    },
  },
  decorators: [
    (Story) => (
      <div className="moovy-story-frame moovy-story-frame--compact moovy-story-frame--center moovy-story-frame--paper">
        <div className="moovy-story-frame__marquee">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    items: [
      "Luxury",
      "Precision",
      "Freedom",
      "Global",
      "Cinema",
      "Private",
      "Altitude",
      "Velocity",
      "Reserve",
      "Journey",
    ],
    speed: 4,
    direction: "up",
    pauseOnHover: true,
    size: "display",
  },
} satisfies Meta<typeof VerticalTextMarquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Display: Story = {};

export const Compact: Story = {
  args: {
    size: "md",
    speed: 6,
  },
};
