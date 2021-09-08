import React, {useState} from 'react'

import {Meta, Story} from '@storybook/react';

import OnOff, {OnOffType} from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    component: OnOff,
    title: 'Components/OnOff',
} as Meta;

const callback = action('Clicked')

const Template: Story<OnOffType> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    isOn: true,
    setOn: callback
}

export const OffMode = Template.bind({});
OffMode.args = {
    isOn: false,
    setOn: callback
}

export const ChangingMode: Story<OnOffType> = (args) => {
    const [isOn, setOn] = useState(false)
    return <OnOff setOn={setOn} isOn={isOn}/>
}
