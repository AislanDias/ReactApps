import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@aislan/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
