import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@aislan/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/aislandias.png',
    alt: 'Aislan Dias',
  },
  argTypes: {
    src: {
      // description: 'Overwritten description',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
