import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { changeTab, setQuestionFilter, QUESTION_FILTER_UNANSWERED } from '../actions/ui'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                //TODO change back to null 
                dispatch(setAuthedUser("sarahedo"))
                dispatch(hideLoading())
                dispatch(setQuestionFilter(QUESTION_FILTER_UNANSWERED))
        })
    }
}