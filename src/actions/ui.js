export const CHANGE_TAB = 'CHANGE_TAB'
export const CHANGE_QUESTION_FILTER = "CHANGE_QUESTION_FILTER"
export const QUESTION_FILTER_ANSWERED = "answered"
export const QUESTION_FILTER_UNANSWERED = "unanswered"

export function changeTab(tab) {
    return {
        type: CHANGE_TAB,
        tab
    }
}

export function setQuestionFilter(filterName) {
    return {
        type: CHANGE_QUESTION_FILTER,
        filterName
    }
}
