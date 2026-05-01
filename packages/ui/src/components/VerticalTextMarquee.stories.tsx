import type { Meta, StoryObj } from "@storybook/react-vite";
import { VerticalTextMarquee } from "./VerticalTextMarquee";

const meta = {
  title: "Motion/VerticalTextMarquee",
  component: VerticalTextMarquee,
  tags: ["autodocs"],
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
    items: ["Luxury", "Precision", "Freedom", "Global"],
    speed: 10,
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
