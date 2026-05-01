import type { Meta, StoryObj } from "@storybook/react-vite";
import { LocationMarquee } from "./LocationMarquee";

const meta = {
  title: "Motion/LocationMarquee",
  component: LocationMarquee,
  tags: ["autodocs"],
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
