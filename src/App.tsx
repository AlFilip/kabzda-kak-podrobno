import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";


type TitleType = { title: string }

function App() {
    const [rating, setRating] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [isToggleOn, setToggle] = useState<boolean>(true);
    return (
        <div className="App">
            <AppTitle title={'This is App component'}/>
            <Rating rating={rating} setRating={setRating}/>
            {/*<UnControlledRating/>*/}
            <Accordion title={'Menu'} collapsed={accordionCollapsed}
                            setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)} />
            {/*<UnControlledAccordion title={'ShMenu'} />*/}
            <OnOff isOn={isToggleOn} setOn={setToggle} />
        </div>
    )
}

function AppTitle(props: TitleType) {
    return <h1>{props.title}</h1>
}

export default App;


