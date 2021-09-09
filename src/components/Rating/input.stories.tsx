// Button.stories.ts | Button.stories.tsx

import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react'

import {Meta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";

export default {
    // component: OnOff,
    title: 'example',
} as Meta;


export const GetValueOfInputByButtonPress: Story = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        if (inputRef.current) {
            setValue(inputRef.current.value)
        }
    }
    return <>
        <input type="text" ref={inputRef}/>
        <button onClick={save}>Save</button>
        {value}
    </>
}


export const ControlledInput: Story<{ value: string }> = (args) => {
    const [value, setValue] = useState<string>('')

    const onChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
        action('')
        setValue(e.currentTarget.value)
    }

    return <>
        <input value={value} onChange={onChange} type="text"/>
        Current Value =&gt; {value}
    </>
}


export const ControlledCheckbox: Story<{ on: boolean }> = (args) => {
    const [on, setOn] = useState<boolean>(false)

    const onChange = () => setOn(!on)

    return (
        <div>
            <input checked={on} onChange={onChange} type="checkbox"/>
            =&gt; {on ? 'Checked' : 'Not Checked'}
        </div>
    )
}


type optionType = {
    value: string
    title: string
}
type ControlledSelectType = {
    optionsList: Array<optionType>
}

export const ControlledSelect: Story<ControlledSelectType> = (args) => {
    const [parentValue, setParentValue] = useState<string>('default')

    const onChange = (e:ChangeEvent<HTMLSelectElement>): void => {
        setParentValue(e.currentTarget.value)
    }

    const options = args.optionsList.map(o => <option value={o.value}>{o.title}</option>)

    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                {options}
            </select>
            <span>
                Current Value =&gt; {parentValue}
            </span>
        </div>
    )
}
ControlledSelect.args = {
    optionsList: [
        {value: 'default', title: 'none',},
        {value: '1', title: 'Minsk',},
        {value: '2', title: 'Moscow',},
        {value: '3', title: 'Kiev',},
    ]
}