import React from "react";

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
}

export type AccordionType = {
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

export function Accordion(props:AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props:AccordionTitleType) {
    return <h3 onClick={props.setCollapsed}>{props.title}</h3>
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}