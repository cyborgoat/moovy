import type { Meta, StoryObj } from "@storybook/react-vite";
import { ZoomHeroSection } from "./ZoomHeroSection";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import zoomHeroSectionSource from "./ZoomHeroSection.tsx?raw";

const meta = {
  title: "Editorial/ZoomHeroSection",
  component: ZoomHeroSection,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A hero section with immersive background motion and configurable zoom and overlay styling.",
        usage: `
\`\`\`tsx
import { ZoomHeroSection } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function ZoomHeroSectionExample() {
  return (
    <ZoomHeroSection
      eyebrow="Private jet charter worldwide"
      title="Your freedom to enjoy life"
      subtitle="Every flight is designed around your comfort, time, and ambitions."
      backgroundSrc="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2400&auto=format&fit=crop"
      backgroundAlt="Private jet above clouds"
      zoom="pulse"
      overlay="dark"
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: zoomHeroSectionSource,
        },
        composition: `
Use \`ZoomHeroSection\` with:

- \`backgroundSrc\` and \`backgroundAlt\` for hero media.
- \`zoom\` for animation style.
- \`overlay\` for tone over the background.
- \`eyebrow\`, \`title\`, and \`subtitle\` for text content.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`eyebrow\` | \`string\` | Optional small top label. |
| \`title\` | \`string\` | Primary heading text. |
| \`subtitle\` | \`string\` | Secondary heading text. |
| \`zoom\` | \`\"pulse\" or \"out\"\` | Background animation style. |
| \`overlay\` | \`\"light\" or \"dark\"\` | Overlay tone for contrast. |
`,
      }),
    },
  },
  args: {
    eyebrow: "Private jet charter worldwide",
    title: "Your freedom to enjoy life",
    subtitle: "Every flight is designed around your comfort, time, and ambitions.",
    backgroundSrc:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2400&auto=format&fit=crop",
    backgroundAlt: "Private jet above clouds",
    zoom: "pulse",
    overlay: "dark",
  },
} satisfies Meta<typeof ZoomHeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ZoomOut: Story = {
  args: {
    zoom: "out",
    title: "We are movement",
  },
};
