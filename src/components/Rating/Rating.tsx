import React from "react";

type StarType = {
    selected: boolean
    setRating: () => void
}

export type RatingValueType = 1 | 2 | 3 | 4 | 5

type RatingType = {
    rating: RatingValueType
    setRating: (rating: RatingValueType) => void
}

type StarsElementsType = Array<JSX.Element>

export function Rating(props: RatingType) {
    const getStars = (ratingCount: RatingValueType): StarsElementsType => {
        const stars: StarsElementsType = []
        for (let i: RatingValueType = 1; i <= ratingCount; i++) {
            stars.push(<Star selected={props.rating >= i} key={i} setRating={() => props.setRating(i)}/>)
        }
        return stars
    }
    const stars = getStars(5)

    return (
        <div>
            {stars}
        </div>
    )
}

function Star(props: StarType) {
    const selectedStyle = {fontWeight: props.selected ? 700 : 400}
    return <span style={selectedStyle} onClick={() => props.setRating()}> star </span>
}