import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductShowcase } from "./ProductShowcase";

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
