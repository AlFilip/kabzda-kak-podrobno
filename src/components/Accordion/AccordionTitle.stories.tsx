import React from 'react'

import {Meta} from '@storybook/react';

import {AccordionTitle} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    component: AccordionTitle,
    title: 'AccordionTitle',
} as Meta;

const callback = action('Click on header')
export const AccordionHeader = () => <AccordionTitle setCollapsed={callback} title={'Accordion Title'} />
