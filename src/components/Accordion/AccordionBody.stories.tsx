import React from 'react'

import {Meta, Story} from '@storybook/react';

import {Accordion, AccordionBody, AccordionBodyType} from './Accordion';

export default {
    component: Accordion,
    title: 'Components/Accordion',
} as Meta;

const callback = (id: any) => alert(`${id.title} was clicked...`)

const Template: Story<AccordionBodyType> = args => <AccordionBody {...args}/>

export const AccordionBodyNotCollapsedMode = Template.bind({})
AccordionBodyNotCollapsedMode.args = {
    items: [
        {value: 'Alex', title: 'Alex'}, {value: 'Alex', title: 'Sergey'}, {value: 'Alex', title: 'Kolyan'},
    ],
    callBack: callback,
}