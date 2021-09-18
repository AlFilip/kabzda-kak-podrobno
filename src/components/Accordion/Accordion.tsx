import React, {MouseEventHandler} from "react";

type AccordionTitleType = {
    title: string
    setCollapsed: () => void
    color?: string
}

export type ItemType = { value: any, title: string }

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
    // Array with items that form the content of the accordion body
    items: Array<ItemType>
    //
    accordionBodyCallBack: (id: any) => void
}
export type AccordionBodyType = {
    items: Array<ItemType>
    callBack: (id: any) => void
}

export function Accordion(props: AccordionType) {
    const accordionBodyCallBack = (id: any) => props.accordionBodyCallBack(id)
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={props.setCollapsed}
                            color={props.color}/>
            {!props.collapsed && <AccordionBody items={props.items} callBack={accordionBodyCallBack}/>}
        </div>
    )
}

export function AccordionTitle(props: AccordionTitleType) {
    return <h3 style={props.color ? {color: props.color} : undefined} onClick={props.setCollapsed}>{props.title}</h3>
}

export function AccordionBody(props: AccordionBodyType) {
    const items = props.items.map((m, i) => <li onClick={()=>props.callBack(m) } key={i + m.title}>{m.title}</li>)
    return (
        <ul>
            {items}
        </ul>
    )
}