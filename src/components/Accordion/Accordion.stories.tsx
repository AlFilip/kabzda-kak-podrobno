import React, {useState} from 'react'

import {Meta} from '@storybook/react';

import {Accordion} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    component: Accordion,
    title: 'Accordion',
} as Meta;

const callback = action('Click')

export const CollapsedMode = () => <Accordion title={'Заголовок'} collapsed={true} setCollapsed={callback}/>
export const NotCollapsedMode = () => <Accordion title={'Заголовок'} collapsed={false} setCollapsed={callback}/>

export const ChangingMode = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Заголовок'} setCollapsed={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
}