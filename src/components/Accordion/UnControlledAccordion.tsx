import React, {useState} from "react";

type UnControlledAccordionType = {
    title: string
}
type UnControlledAccordionTitleType = {
    title: string
    toggleCollapsed: () => void
}

export function UnControlledAccordion(props:UnControlledAccordionType) {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => setCollapsed(!collapsed)
    return (
        <div>
            <AccordionTitle toggleCollapsed={toggleCollapsed} title={props.title}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props:UnControlledAccordionTitleType) {
    return <h3 onClick={()=> props.toggleCollapsed()}>{props.title}</h3>
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