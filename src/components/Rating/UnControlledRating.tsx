import React, {useState} from "react";

type StarType = {
    selected: boolean
    id: number
    setRating: (rating: number) => void
}

// type RatingType = {
//     rating: 1 | 2 | 3 | 4 | 5
// }


export function UnControlledRating() {
    const [rating, setRating] = useState(3)
    const getStarsNumbersArr = (len: number) => Array.from({length: len}, (_, i) => i + 1)
    const stars = getStarsNumbersArr(5).map(item => <Star selected={rating >= item}
                                                       id={item}
                                                       key={item}
                                                       setRating={setRating}/>)

    return (
        <div>
            {stars}
        </div>
    )
}

function Star(props: StarType) {
    const selectedStyle = {fontWeight: props.selected ? 700 : 400}
    const setRating = () => props.setRating(props.id)
    return <span style={selectedStyle} onClick={setRating}> star </span>
}