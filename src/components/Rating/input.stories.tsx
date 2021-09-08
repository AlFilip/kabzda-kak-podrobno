// Button.stories.ts | Button.stories.tsx

import React, {useRef, useState} from 'react'

import {Meta, Story} from '@storybook/react';

import {Rating, RatingType, RatingValueType} from './Rating';

export const getCategory = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    component: Rating,
    title: 'example',
} as Meta;

export const GetValueOfInputByButtonPress = () => {
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