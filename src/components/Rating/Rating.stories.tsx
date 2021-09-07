// Button.stories.ts | Button.stories.tsx

import React, {useState} from 'react'

import {Meta} from '@storybook/react';

import {Rating, RatingValueType} from './Rating';

export default {
    component: Rating,
    title: 'Rating',
} as Meta;

export const Rating1 = () => <Rating rating={1} setRating={x => x}/>
export const Rating2 = () => <Rating rating={2} setRating={x => x}/>
export const Rating3 = () => <Rating rating={3} setRating={x => x}/>
export const Rating4 = () => <Rating rating={4} setRating={x => x}/>
export const Rating5 = () => <Rating rating={5} setRating={x => x}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(1)
    return <Rating rating={rating} setRating={setRating}/>
}

