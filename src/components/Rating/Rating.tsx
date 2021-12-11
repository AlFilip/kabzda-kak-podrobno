import React from "react";

export type StarType = {
    selected: boolean
    setRating: () => void
}

export type RatingValueType = 1 | 2 | 3 | 4 | 5

export type RatingType = {
    rating: RatingValueType
    callBack: (rating: RatingValueType) => void
}

type StarsElementsType = Array<JSX.Element>

export function Rating(props: RatingType): JSX.Element {
    const getStars = (ratingCount: RatingValueType): StarsElementsType => {
        const stars: StarsElementsType = []
        for (let i: RatingValueType = 1; i <= ratingCount; i++) {
            stars.push(<Star selected={props.rating >= i} key={i} setRating={() => props.callBack(i)}/>)
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

export function Star(props: StarType): JSX.Element {
    const selectedStyle = {fontWeight: props.selected ? 700 : 400}
    return <span style={selectedStyle} onClick={() => props.setRating()}> star </span>
}