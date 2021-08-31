import React from "react";
import {TitleType} from "../../App";

type AccordionType = {
    title: string
    collapsed: boolean
}


export function Accordion(props:AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props:TitleType) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}