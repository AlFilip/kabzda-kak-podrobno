import React from 'react'

import {Meta} from '@storybook/react';

import {AccordionTitle} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    component: AccordionTitle,
    title: 'Components/Accordion',
} as Meta;

const callback = action('Click on header')
export const AccordionHeader = () => <AccordionTitle setCollapsed={callback} title={'Accordion Title'} />
