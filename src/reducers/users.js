import { RECEIVE_QUESTIONS } from '../actions/questions';
import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        default: 
        return state;
    }
}