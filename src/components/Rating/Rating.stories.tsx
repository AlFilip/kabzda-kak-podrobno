// Button.stories.ts | Button.stories.tsx

import React, {useState} from 'react'

import {Meta, Story} from '@storybook/react';

import {Rating, RatingType, RatingValueType} from './Rating';

export const getCategory = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    component: Rating,
    title: 'Components/Rating/Rating',
    argTypes: {
        "Click on stars to change rating": {
            ...getCategory('Description')
        },
        rating: {
            options: [1, 2, 3, 4, 5],
            control: {type: 'inline-radio'},
            ...getCategory('Main')
        },
        setRating: {
            ...getCategory('Callbacks')
        },
    }
} as Meta;

export const ChangingRatingOnClickMode: Story<RatingType> = (args) => {
    const [rating, setRating] = useState<RatingValueType>(1)
    return <Rating rating={rating} setRating={setRating}/>
}

export const ChangingRatingMode: Story<RatingType> = (args) => <Rating {...args}/>
ChangingRatingMode.args = {
    rating: 1,
    setRating: rating => undefined
}
