import {Meta, Story} from "@storybook/react";
import {Star, StarType} from "./Rating";
import {action} from "@storybook/addon-actions";
import React from "react";

export default {
    component: Star,
    title: 'Star'
} as Meta

const callback = action('Click')

export const StarActiveMode = () => <Star selected={true} setRating={callback} />
export const StarNotActiveMode = () => <Star selected={false} setRating={callback} />

const Template: Story<StarType> = args => <Star {...args}/>

export const EditableModeStar = Template.bind({})
EditableModeStar.args = {
    selected: true,
    setRating: () => undefined,
}