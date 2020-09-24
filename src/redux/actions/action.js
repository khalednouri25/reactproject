import * as ACTIONS_TYPES from './action_types'


export const USER_INPUT = (user) => 
{  
    return {
        type: ACTIONS_TYPES.USER_INPUT,
        payload: user
    }
}

