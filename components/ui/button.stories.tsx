import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { CircleDashed } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: { type: "select" },
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    asChild: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Variants: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {["default", "outline", "secondary", "ghost", "destructive", "link"].map(
        (variant) => (
          <Button key={variant} variant={variant as any} {...args}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)}
          </Button>
        )
      )}
    </div>
  ),
}

export const Sizes: Story = {
  args: {
    children: "Button",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3 items-center">
      {[
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ].map((size) => (
        <Button key={size} size={size as any} {...args}>
          {size}
        </Button>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      <Button {...args}>
        <CircleDashed className="mr-2 h-4 w-4" />
        Loading
      </Button>

      <Button {...args}>
        Continue
        <CircleDashed className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="icon" aria-label="Loading">
        <CircleDashed className="h-4 w-4" />
      </Button>

      <Button size="icon" variant="outline" aria-label="Loading">
        <CircleDashed className="h-4 w-4" />
      </Button>
    </div>
  ),
}