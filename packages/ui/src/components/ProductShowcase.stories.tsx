import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductShowcase } from "./ProductShowcase";
import { createManualDocsPage } from "../../.storybook/manualDocsPage";
import productShowcaseSource from "./ProductShowcase.tsx?raw";

const specs = [
  { label: "Category", value: "Premium" },
  { label: "Availability", value: "Worldwide" },
  { label: "Capacity", value: "Configurable" },
  { label: "Support", value: "24/7" },
  { label: "Lead time", value: "On request" },
  { label: "Experience", value: "Fully managed" },
];

const meta = {
  title: "Product/ProductShowcase",
  component: ProductShowcase,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: createManualDocsPage({
        overview: "A premium product hero section for services, memberships, and curated experiences.",
        usage: `
\`\`\`tsx
import { ProductShowcase } from "@moovy/ui";
import "@moovy/ui/styles.css";

export function ProductShowcaseExample() {
  return (
    <ProductShowcase
      eyebrow="Signature offering"
      title="A premium experience, shaped around you"
      productName="Concierge service"
      description="A focused showcase section for premium products, services, venues, memberships, or featured experiences."
      imageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop"
      imageAlt="Premium interior workspace"
      secondaryImageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
      secondaryImageAlt="Detailed interior view"
      specs={[
        { label: "Category", value: "Premium" },
        { label: "Availability", value: "Worldwide" },
        { label: "Capacity", value: "Configurable" },
      ]}
    />
  );
}
\`\`\`
`,
        installation: {
          dependency: "npm install @moovy/ui",
          source: productShowcaseSource,
        },
        composition: `
Use \`ProductShowcase\` with:

- \`eyebrow\` for short lead label.
- \`title\` and \`productName\` for primary copy.
- \`imageSrc\` and \`secondaryImageSrc\` for the hero imagery.
- \`specs\` list for feature chips.
`,
        api: `
| Prop | Type | Description |
| ---- | ---- | ----------- |
| \`eyebrow\` | \`string\` | Small heading above the main title. |
| \`title\` | \`string\` | Main section title. |
| \`productName\` | \`string\` | Product/service name value. |
| \`specs\` | \`SpecItem[]\` | Array of labeled metadata rows. |
`,
      }),
    },
  },
  args: {
    eyebrow: "Signature offering",
    title: "A premium experience, shaped around you",
    productName: "Concierge service",
    description:
      "A focused showcase section for premium products, services, venues, memberships, or featured experiences.",
    imageSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Premium interior workspace",
    secondaryImageSrc:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
    secondaryImageAlt: "Detailed interior view",
    specs,
  },
} satisfies Meta<typeof ProductShowcase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
