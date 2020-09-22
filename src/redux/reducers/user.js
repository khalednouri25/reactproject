import * as ACTION_TYPES from './../actions/action_types'

const initialState = {
    user_text: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.INPUT_USER: 
        return {
            ...state, 
            user_text: action.payload
        }
        default: 
        return state
    }
}

export default userReducer