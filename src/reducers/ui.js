import { CHANGE_TAB } from '../actions/ui'

export function currentTab(state = {}, action) {
    console.log(action.tab)
    switch(action.type) {
        case CHANGE_TAB:
            return action.tab
        default:
            return state
    }
}