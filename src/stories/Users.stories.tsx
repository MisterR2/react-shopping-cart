import {Meta, StoryObj} from '@storybook/react'
import Users from '../lib/Users'

const meta = {
    title: 'Lib/Users',
    component: Users
} satisfies Meta<typeof Users>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}