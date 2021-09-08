import {Meta, Story} from "@storybook/react";
import {Star, StarType} from "./Rating";
import {action} from "@storybook/addon-actions";
import React from "react";

export default {
    component: Star,
    title: 'Components/Rating/Star',
} as Meta

const callback = action('Click')


const Template: Story<StarType> = args => <Star {...args}/>

export const StarActiveMode = Template.bind({})
StarActiveMode.args = {
    selected: true,
    setRating: callback,
}
export const StarNotActiveMode = Template.bind({})
StarNotActiveMode.args = {
    selected: false,
    setRating: callback,
}
export const EditableModeStar = Template.bind({})
EditableModeStar.args = {
    selected: true,
    setRating: callback,
}