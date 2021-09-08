import React, {useState} from 'react'

import {Meta} from '@storybook/react';

import {Accordion, AccordionBody} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    component: Accordion,
    title: 'Components/Accordion',
} as Meta;

export const AccordionBodyNotCollapsedMode = () => <AccordionBody />