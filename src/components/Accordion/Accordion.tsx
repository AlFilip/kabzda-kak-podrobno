import React from "react";

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
    color?: string
}

export type AccordionType = {
    /**
     *  The title of the Accordion
     */
    title: string
    /**
     *  A boolean value that determines whether the accordion will be collapsed (will be collapse if true)
     */
    collapsed: boolean
    /**
     * Function which toggling state of Accordion (collapsed: true / false)
     */
    setCollapsed: () => void
    // Parameter which set the color of the Accordion title
    color?: string
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed} color={props.color}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

export function AccordionTitle(props: AccordionTitleType) {
    return <h3 style={props.color? {color: props.color} : undefined} onClick={props.setCollapsed}>{props.title}</h3>
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