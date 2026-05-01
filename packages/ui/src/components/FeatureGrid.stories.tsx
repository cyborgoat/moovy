import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureGrid } from "./FeatureGrid";

const meta = {
  title: "Editorial/FeatureGrid",
  component: FeatureGrid,
  tags: ["autodocs"],
  args: {
    heading: "Global private aviation",
    columns: 2,
    items: [
      {
        title: "Direct Access to Private Travel",
        body: "Global operations ensure seamless, personalized travel experiences from the first call to landing.",
      },
      {
        title: "Your Freedom to Enjoy Life",
        body: "Every itinerary is shaped around your time, comfort, privacy, and schedule.",
      },
      {
        title: "Precision and Excellence",
        body: "Crew, fleet, and service details meet global standards across every mission.",
      },
      {
        title: "Global Reach, Personal Touch",
        body: "Access destinations across the world while specialists manage every flight detail.",
      },
    ],
  },
} satisfies Meta<typeof FeatureGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
