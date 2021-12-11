import React, {useReducer} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Select} from "./components/Select/Select";
import {reducer, SET_RATING, SET_SELECT_VALUE, TOGGLE_ACCORDION_COLLAPSED, TOGGLE_ON_OFF} from "./reducer";


type TitleType = { title: string }


function App() {
    const [state, dispatch] = useReducer(reducer, {
        rating: 3,
        isOnToggle: true,
        accordion: {
            accordionCollapsed: false, accordionItems: [
                {value: 'Alex', title: 'Alex'}, {value: 'Sergey', title: 'Sergey'}, {value: 'Kolyan', title: 'Kolyan'},
            ]
        },
        select: {
            selectValue: '',
            items: [
                {value: '1', title: 'Alex'},
                {value: '2', title: 'Sergey'},
                {value: '3', title: 'Artem'},
                {value: '4', title: 'Nikolay'},
            ]
        },
    })

    const setRating = (value: RatingValueType) => dispatch({type: SET_RATING, ratingValue: value})
    const toggleOnOff = (value: boolean) => dispatch({type: TOGGLE_ON_OFF, onOffValue: value})
    const setSelectValue = (value: string) => dispatch({type: SET_SELECT_VALUE, value: value})

    const accordionBodyCallBack = (id: any) => alert(`${id.title} was clicked...`)
    return (
        <div className="App">
            <AppTitle title={'This is App component'}/>
            <Rating rating={state.rating} callBack={setRating}/>
            <Accordion title={'Menu'} collapsed={state.accordion.accordionCollapsed}
                       setCollapsed={() => dispatch({type: TOGGLE_ACCORDION_COLLAPSED})}
                       items={state.accordion.accordionItems}
                       accordionBodyCallBack={accordionBodyCallBack}/>
            <OnOff isOn={state.isOnToggle} callback={toggleOnOff}/>
            <Select items={state.select.items}
                    value={state.select.selectValue}
                    callBack={setSelectValue}/>
        </div>
    )
}

function AppTitle(props: TitleType) {
    return <h1>{props.title}</h1>
}

export default App;


