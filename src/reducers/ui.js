import { CHANGE_QUESTION_FILTER, CHANGE_TAB } from '../actions/ui'

export function currentTab(state = {}, action) {
    console.log(action.tab)
    switch(action.type) {
        case CHANGE_TAB:
            return action.tab
        default:
            return state
    }
}

export function currentQuestionFilter(state = {}, action) {
    console.log(action.tab)
    switch(action.type) {
        case CHANGE_QUESTION_FILTER:
            return action.filterName
        default:
            return state
    }
}