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
        accordionBodyCallBack: {
            ...getCategory('callbacks')
        },
        color: {
            control: 'color',
            ...getCategory('Not required (Black as default)'),
        },
    },
} as Meta;

const callback = () => action('Click')
const accordionBodyCallBack = (id: any) => alert(`${id.title} was clicked...`)

const Template: Story<AccordionType> = (args) => <Accordion {...args}/>

const AccordionDefaultArgs = {
    title: 'Заголовок',
    color: 'black',
    items: [
        {value: 'Alex', title: 'Alex'}, {value: 'Alex', title: 'Sergey'}, {value: 'Alex', title: 'Kolyan'},
    ],
    accordionBodyCallBack: accordionBodyCallBack,

}

export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...AccordionDefaultArgs,
    collapsed: true,
    setCollapsed: callback,
}

export const NotCollapsedMode = Template.bind({})
NotCollapsedMode.args = {
    ...AccordionDefaultArgs,
    collapsed: false,
    setCollapsed: callback,
}

export const ChangingMode: Story<AccordionType> = (args) => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion {...args} setCollapsed={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
}
ChangingMode.args = {
    ...AccordionDefaultArgs,
}
