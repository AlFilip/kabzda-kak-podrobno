import React from "react";

type StarType = {
    selected: boolean
}

type RatingType = {
    rating: 1 | 2 | 3 | 4 | 5
}

export function Rating(props:RatingType) {
    return <>
        <div>
            <Star selected={props.rating >= 1}/>
            <Star selected={props.rating >= 2}/>
            <Star selected={props.rating >= 3}/>
            <Star selected={props.rating >= 4}/>
            <Star selected={props.rating === 5}/>
        </div>
    </>
}

function Star(props:StarType) {
    return props.selected? <span><b>star </b></span> : <span>star </span>
}