import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocationMarquee } from "./LocationMarquee";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import locationMarqueeSource from "./LocationMarquee.tsx?raw";

const meta = {
  title: "Motion/LocationMarquee",
  component: LocationMarquee,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A horizontally animated marquee for long location lists and branded scrolling text.",
        usage: `
\`\`\`tsx
import { LocationMarquee } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function LocationMarqueeExample() {
  return (
    <LocationMarquee
      locations={["Los Angeles", "Sydney", "Marrakech", "Singapore", "Dubai"]}
      rows={2}
      speed={26}
      direction="left"
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: locationMarqueeSource,
        },
        composition: `
Use \`LocationMarquee\` with:

- \`locations\` as the scrolling list.
- \`rows\` for vertical layout depth.
- \`speed\` for marquee velocity.
- \`direction\` to invert scroll direction.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`locations\` | \`string[]\` | Text values rendered in the marquee. |
| \`rows\` | \`number\` | How many horizontal rows to render. |
| \`speed\` | \`number\` | Scroll speed multiplier. |
| \`direction\` | \`\"left\", \"right\", \"up\", or \"down\"\` | Motion direction. |
`,
      }),
    },
  },
  decorators: [
    (Story) => (
      <div className="moovy-story-frame moovy-story-frame--wide moovy-story-frame--paper">
        <Story />
      </div>
    ),
  ],
  args: {
    locations: [
      "Los Angeles",
      "Sydney",
      "Marrakech",
      "Singapore",
      "Cairo",
      "Toronto",
      "New York",
      "Tokyo",
      "London",
      "Dubai",
      "Paris",
      "Seoul",
    ],
    rows: 2,
    speed: 26,
    direction: "left",
  },
} satisfies Meta<typeof LocationMarquee>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
