import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageRevealCard } from "./ImageRevealCard";

const meta = {
  title: "Editorial/ImageRevealCard",
  component: ImageRevealCard,
  tags: ["autodocs"],
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
