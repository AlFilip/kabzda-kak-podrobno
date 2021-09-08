// Button.stories.ts | Button.stories.tsx

import React, {ChangeEventHandler, useRef, useState} from 'react'

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

    return (
        <div>
            <input checked={on} onChange={() => setOn(!on)} type="checkbox"/>
            =&gt; {on ? 'Checked': 'Not Checked'}
        </div>
    )
}

export const ControlledSelect: Story = () => {
    return <input type="select"/>
}