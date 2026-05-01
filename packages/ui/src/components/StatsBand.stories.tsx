import type { Meta, StoryObj } from "@storybook/react-vite";
import { LiveTime, StatsBand } from "./StatsBand";

const meta = {
  title: "Data/StatsBand",
  component: StatsBand,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="moovy-story-frame moovy-story-frame--compact moovy-story-frame--center moovy-story-frame--paper">
        <Story />
      </div>
    ),
  ],
  args: {
    stats: [
      { label: "Countries supported", value: "174" },
      { label: "Based in", value: "Dubai, UAE" },
      { label: "Local time", value: <LiveTime /> },
    ],
  },
} satisfies Meta<typeof StatsBand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
