import {ItemType} from "./components/Accordion/Accordion";
import {RatingValueType} from "./components/Rating/Rating";

type SelectItemType = { value: string, title: string }

type selectComponentType = {
    selectValue: string
    items: Array<SelectItemType>
}

type AccordionComponentType = {
    accordionCollapsed: boolean
    accordionItems: Array<ItemType>
}

type StateType = {
    rating: RatingValueType
    isOnToggle: boolean
    accordion: AccordionComponentType
    select: selectComponentType
}

export const SET_RATING = 'SET-RATING'
export const TOGGLE_ON_OFF = 'TOGGLE_ON_OFF'
export const TOGGLE_ACCORDION_COLLAPSED = 'TOGGLE_ACCORDION_COLLAPSED'
export const SET_SELECT_VALUE = 'SET_SELECT_VALUE'

type SetRatingAT = {
    type: 'SET-RATING'
    ratingValue: RatingValueType
}

type ToggleOnOffAT = {
    type: 'TOGGLE_ON_OFF'
    onOffValue: boolean
}

type ToggleAccordionCollapsedAT = {
    type: 'TOGGLE_ACCORDION_COLLAPSED'
}

type SetSelectedValueAT = {
    type: 'SET_SELECT_VALUE'
    value: string
}

type ActionType = SetRatingAT | ToggleOnOffAT | ToggleAccordionCollapsedAT | SetSelectedValueAT

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_RATING:
            return {...state, rating: action.ratingValue}
        case TOGGLE_ON_OFF:
            return {...state, isOnToggle: action.onOffValue}
        case TOGGLE_ACCORDION_COLLAPSED:
            return {...state, accordion: {...state.accordion, accordionCollapsed: !state.accordion.accordionCollapsed}}
        case SET_SELECT_VALUE:
            return {...state, select: {...state.select, selectValue: action.value}}
    }
    return state
}