import type { Meta, StoryObj } from "@storybook/react-vite";
import { ZoomHeroSection } from "./ZoomHeroSection";

const meta = {
  title: "Editorial/ZoomHeroSection",
  component: ZoomHeroSection,
  tags: ["autodocs"],
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
