import React, {useState} from 'react'

import {Meta, Story} from '@storybook/react';

import {Accordion, AccordionType} from './Accordion';
import {action} from "@storybook/addon-actions";
import {getCategory} from "../Rating/Rating.stories";

export default {
    component: Accordion,
    title: 'Components/Accordion',
    argTypes: {
        title: {
            ...getCategory('Main')
        },
        collapsed: {
            ...getCategory('Main')
        },
        setCollapsed: {
            ...getCategory('callbacks')
        },
        color: {
            control: 'color',
            ...getCategory('Not required (Black as default)'),
        },
    },
} as Meta;

const callback = action('Click')

const Template: Story<AccordionType> = (args) => <Accordion {...args}/>

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    title: 'Заголовок',
    collapsed: true,
    setCollapsed: callback,
    color: 'black',
}

export const NotCollapsedMode = Template.bind({})
NotCollapsedMode.args = {
    title: 'Заголовок',
    collapsed: false,
    setCollapsed: callback,
    color: 'black',
}

export const ChangingMode: Story<AccordionType> = (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion {...args} setCollapsed={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
}
ChangingMode.args = {
    title: 'Заголовок',
    color: 'black'
}
