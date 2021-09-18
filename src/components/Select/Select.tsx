import React, {useState} from "react";
import s from './Select.module.css'

type SelectItemType = { value: any, title: string }

export type SelectType = {
    value?: string
    items: SelectItemType[]
    callBack: (value: any) => void
}

export function Select(props: SelectType) {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const currentItem = props.items.find(f => f.value === props.value)
    const currentTitle = currentItem ? currentItem.title : ''
    const [hoveredItem, setHoveredItem] = useState(currentItem ? currentItem.value : '')
    const getLiClass = (m: SelectItemType) => {
        return `${s.optionItem} ${hoveredItem === m.value  ? s.selectedItem : ''}`
    }

    const options = props.items.map(m => <li className={getLiClass(m)}
                                             key={m.value}
                                             onMouseEnter={() =>setHoveredItem(m.value)}
                                             onClick={() => {
                                                 props.callBack(m.value)
                                                 setCollapsed(true)
                                             }}>{m.title} {hoveredItem === m.value && <span>⁐</span>} </li>)
    const onKeyPress = (e: React.KeyboardEvent) => {
        console.log(e.key);
        if (!collapsed) {
            let value
            switch (e.key) {
                case 'ArrowUp':
                    value =props.value && +props.value > 1 ? `${+props.value - 1}` : (props.items.length).toString()
                    props.callBack(value)
                    setHoveredItem(value)
                    break
                case 'ArrowDown':
                    value = props.value && +props.value < props.items.length ? `${+props.value + 1}` : '1'
                    props.callBack(value)
                    setHoveredItem(value)
                    break
                case 'Enter':
                    toggleCollapsed()
                    break
            }
        }
    }

    return (
        <div className={s.selectWrapper} onKeyDown={onKeyPress} tabIndex={0}>
            <div className={`${s.select} ${!collapsed ? s.exposed : ''}`}>
                <div className={s.value} onClick={toggleCollapsed}>
                    {currentTitle}
                    <span className={!collapsed ? s.exposed : ''}>›</span>
                </div>
                {!collapsed && <div className={s.options}>{options}</div>}
            </div>
        </div>
    )
}

