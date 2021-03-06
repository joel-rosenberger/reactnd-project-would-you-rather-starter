import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ANSWER_OPTION_ONE = "optionOne"
export const ANSWER_OPTION_TWO = "optionTwo"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function answerQuestion(authedUser, qid, answer) {
    return {
        type: ANSWER_QUESTION,
        authedUser: authedUser, 
        qid: qid, 
        answer: answer
    }
}

export function handleAddQuestion(optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return _saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser,           
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return _saveQuestionAnswer({
            authedUser: authedUser,
            qid: qid,
            answer: answer
        })
        .then(() => dispatch(answerQuestion(authedUser, qid, answer)))
        .then(() => dispatch(hideLoading()))
    }
}