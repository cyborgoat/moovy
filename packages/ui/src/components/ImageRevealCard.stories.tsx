import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageRevealCard } from "./ImageRevealCard";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import imageRevealCardSource from "./ImageRevealCard.tsx?raw";

const meta = {
  title: "Editorial/ImageRevealCard",
  component: ImageRevealCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A compact card that reveals image and copy together with configurable transition style.",
        usage: `
\`\`\`tsx
import { ImageRevealCard } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function ImageRevealCardExample() {
  return (
    <ImageRevealCard
      title="Onboard services"
      body="Curated dining, attentive crew, and seamless connectivity arranged around the journey."
      imageSrc="https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200&auto=format&fit=crop"
      imageAlt="Private aircraft cabin"
      reveal="scale"
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: imageRevealCardSource,
        },
        composition: `
Use \`ImageRevealCard\` with:

- \`title\` and \`body\` for content.
- \`imageSrc\` and \`imageAlt\` for media.
- \`reveal\` to control image reveal style.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`title\` | \`string\` | Card title. |
| \`body\` | \`string\` | Card copy text. |
| \`imageSrc\` | \`string\` | Image URL. |
| \`imageAlt\` | \`string\` | Accessibility label for image. |
| \`reveal\` | \`\"scale\" or \"slide\"\` | Reveal animation style. |
`,
      }),
    },
  },
  decorators: [
    (Story) => (
      <div className="moovy-story-frame moovy-story-frame--compact moovy-story-frame--center moovy-story-frame--paper">
        <div className="moovy-story-frame__card">
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    title: "Onboard services",
    body: "Curated dining, attentive crew, and seamless connectivity arranged around the journey.",
    imageSrc: "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Private aircraft cabin",
    reveal: "scale",
  },
} satisfies Meta<typeof ImageRevealCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
