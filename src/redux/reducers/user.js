import * as ACTION_TYPES from './../actions/action_types'

const initialState = {
    userInput: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.USER_INPUT: 
        return {
            ...state,
            userInput: action.payload
        }
        default: 
        return state
    }
}

export default userReducer