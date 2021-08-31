import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import { UnControlledAccordion } from './components/Accordion/UnControlledAccordion';
import {UnControlledRating} from "./components/Rating/UnControlledRating";


export type TitleType = {title: string}

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is App component'}/>
            <Rating rating={3}/>
            <UnControlledRating/>
            <Accordion title={'Menu'} collapsed={false}/>
            <UnControlledAccordion title={'ShMenu'} />
            <OnOff/>
        </div>
    );
}

function AppTitle(props:TitleType) {
    return <h1>{props.title}</h1>
}

export default App;


