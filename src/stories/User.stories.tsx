import {Meta, StoryObj} from '@storybook/react'
import User from '../lib/User'

const meta = {
    title: 'Lib/User',
    component: User
} satisfies Meta<typeof User>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}