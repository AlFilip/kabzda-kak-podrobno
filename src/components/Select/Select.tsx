import React, {useState} from "react";
import s from './Select.module.css'

type SelectItemType = { value: string, title: string }

export type SelectType = {
    value?: string
    items: SelectItemType[]
    callBack: (value: string) => void
}

export function Select(props: SelectType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const currentItem = props.items.find(f => f.value === props.value)
    const currentTitle = currentItem ? currentItem.title : ''
    const [hoveredItemValue, setHoveredItemValue] = useState(currentItem ? currentItem.value : '')

    const getOptionItemClassName = (m: SelectItemType) => {
        return `${s.optionItem} ${hoveredItemValue === m.value ? s.selectedItem : ''}`
    }

    const onKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.callBack(hoveredItemValue)
            toggleCollapsed()
        } else if (!collapsed && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            for (let i = 0; i < props.items.length; i++){
                if (props.items[i].value === hoveredItemValue){
                    if (e.key === 'ArrowUp' && i > 0){
                        setHoveredItemValue(props.items[i-1].value)
                        return
                    }
                    if (e.key === 'ArrowDown' && i < props.items.length - 1) {
                        setHoveredItemValue(props.items[i + 1].value)
                        return
                    }
                }
            }
        }
    }

    const selectClassName = `${s.select} ${!collapsed ? s.exposed : ''}`
    const valueClassName = `${s.value} ${props.value ? '' : s.noValue}`
    const valueSpanClassName = !collapsed ? s.exposed : ''

    const options = props.items.map(m => <li className={getOptionItemClassName(m)}
                                             key={m.value}
                                             onMouseEnter={() => setHoveredItemValue(m.value)}
                                             onClick={() => {
                                                 props.callBack(m.value)
                                                 setCollapsed(true)
                                             }}>{m.title} {hoveredItemValue === m.value &&
    <span>&lsaquo;&rsaquo;</span>} </li>)

    return (
        <div className={s.selectWrapper} onKeyDown={onKeyPress} tabIndex={0}>
            <div className={selectClassName}>
                <div className={valueClassName} onClick={toggleCollapsed}>
                    {currentTitle}
                    <span className={valueSpanClassName}>›</span>
                </div>
                {!collapsed && <div className={s.options}>{options}</div>}
            </div>
        </div>
    )
}
