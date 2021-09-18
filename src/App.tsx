import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemType} from "./components/Accordion/Accordion";
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Select} from "./components/Select/Select";


type TitleType = { title: string }

function App() {
    const [rating, setRating] = useState<RatingValueType>(3)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [isToggleOn, setToggle] = useState<boolean>(true);
    const [accordionItems, setAccordionItems] = useState<Array<ItemType>>([
        {value: 'Alex', title: 'Alex'}, {value: 'Sergey', title: 'Sergey'}, {value: 'Kolyan', title: 'Kolyan'},
    ])
    const items = [
        {value: '1', title: 'Alex'},
        {value: '2', title: 'Sergey'},
        {value: '3', title: 'Artem'},
        {value: '4', title: 'Nikolay'},
    ]
    const [value, setValue] = useState<string>('')

    const accordionBodyCallBack = (id: any) => alert(`${id.title} was clicked...`)
    return (
        <div className="App">
            <AppTitle title={'This is App component'}/>
            <Rating rating={rating} setRating={setRating}/>
            {/*<UnControlledRating/>*/}
            <Accordion title={'Menu'} collapsed={accordionCollapsed}
                       setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={accordionItems} accordionBodyCallBack={accordionBodyCallBack}/>
            <OnOff isOn={isToggleOn} setOn={setToggle}/>
            <Select items={items} callBack={setValue} value={value}/>
        </div>
    )
}

function AppTitle(props: TitleType) {
    return <h1>{props.title}</h1>
}

export default App;


