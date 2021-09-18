import React, {useState} from 'react'

import {Meta, Story} from '@storybook/react';

import {Select, SelectType} from './Select';

export default {
    component: Select,
    title: 'Components/Select',
} as Meta;


const Template: Story<SelectType> = args => {
    const initialValueState = args.value ? args.value : '1'
    const [value, setValue] = useState<string>(initialValueState)

    return <Select value={value}
                   callBack={setValue}
                   items={[
                       {value: '1', title: 'Alex'},
                       {value: '2', title: 'Sergey'},
                       {value: '3', title: 'Artem'},
                       {value: '4', title: 'Nikolay'},
                   ]}/>
}

export const SelectExample = Template.bind({})
SelectExample.args = {}
