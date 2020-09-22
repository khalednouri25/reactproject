import * as ACTIONS_TYPES from './actions_types'
export const success = () => {
    return {
        type: ACTIONS_TYPES.SUCCESS
    }
}

export const user_input = (text) => {
    return {
        type: ACTIONS_TYPES.INPUT_USER, 
        payload: text
    }
}
